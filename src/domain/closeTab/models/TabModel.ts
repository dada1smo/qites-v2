import { formatCurrency } from '@/src/utils/format';
import { TabPayerType } from '../types/TabPayerType';
import { TabItemType } from '../types/TabItemType';
import { calcExpenseSumServiceFee } from '@/src/utils/calc';

export default class TabModel {
  private tabId: string | undefined;
  private tabTotal: number;
  private tabItems: TabItemType[];

  constructor() {
    this.tabTotal = 0;
    this.tabItems = [];
  }

  public setId(id: string) {
    if (!this.tabId) {
      this.tabId = id;
      return this;
    }

    return this;
  }

  public getId() {
    return this.tabId;
  }

  public duplicate(tab: TabModel) {
    this.tabId = tab.getId();
    this.tabTotal = tab.getTotal();
    this.tabItems = tab.getItems();
    return this;
  }

  public setTotal(total: number) {
    this.tabTotal = parseFloat(total.toFixed(2));
    return this;
  }

  public getTotal() {
    return parseFloat(this.tabTotal.toFixed(2));
  }

  public calcRemainder() {
    const itemsTotal = this.tabItems.map((item) =>
      calcExpenseSumServiceFee(item.expenses, item.serviceFee?.percentage)
    );
    const sum = parseFloat(
      itemsTotal
        .reduce((value, current) => value - current, this.tabTotal)
        .toFixed(2)
    );
    return sum;
  }

  public getRemaining() {
    return this.calcRemainder();
  }

  public getUniquePayers() {
    const payers = this.tabItems
      .map(({ payers }) => payers.map(({ name }) => name))
      .flat();
    const unique = new Set(payers);
    return Array.from(unique);
  }

  public getTabSummary() {
    const payersLength = this.getUniquePayers().length;
    const variableWord = payersLength > 1 ? 'pessoas' : 'pessoa';

    return {
      tabRemaining: formatCurrency(this.calcRemainder()),
      tabPayers: `${
        payersLength > 0 ? `${payersLength} ${variableWord}` : 'Ninguém ainda'
      }`,
    };
  }

  public addItem(item: TabItemType) {
    const find = this.tabItems.find(({ id }) => id === item.id);
    const update = this.tabItems.map((i) => {
      if (i.id === item.id) {
        return {
          ...item,
        };
      }
      return i;
    });
    const items = find ? update : [...update, item];
    this.tabItems = items;
    return this;
  }

  public getItems() {
    return this.tabItems;
  }

  public findItem(itemId?: string) {
    const find = this.tabItems.find(({ id }) => id === itemId);

    if (!itemId || !find) {
      return {
        payers: [],
        expenses: [],
        serviceFee: null,
      };
    }

    return {
      payers: find.payers,
      expenses: find.expenses,
      serviceFee: find.serviceFee,
    };
  }

  public getItemsSummary() {
    const items = this.tabItems.map(({ id, payers, expenses, serviceFee }) => {
      return {
        id: id,
        payers: payers.map(({ name }) => name).join(', '),
        value: formatCurrency(
          parseFloat(
            calcExpenseSumServiceFee(expenses, serviceFee?.percentage).toFixed(
              2
            )
          )
        ),
      };
    });

    return items;
  }

  public toJson() {
    return JSON.stringify({
      id: this.tabId,
      total: this.tabTotal,
      items: this.tabItems,
    });
  }
}
