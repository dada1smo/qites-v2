import { formatCurrency } from '@/src/utils/format';
import { TabPayerType } from '../types/TabPayerType';
import { TabItemType } from '../types/TabItemType';
import { calcExpenseSumServiceFee } from '@/src/utils/calc';
import { TabItemFormType } from '../types/TabItemFormTypes';

export default class TabModel {
  private tabId: string | undefined;
  private tabTotal: number;
  private tabItems: TabItemType[];
  private tabSplit: TabPayerType[];

  constructor() {
    this.tabTotal = 0;
    this.tabItems = [];
    this.tabSplit = [];
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
    this.tabSplit = tab.getSplit();
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

  public getRemainderCurrency() {
    return formatCurrency(parseFloat(this.getRemaining().toFixed(2)));
  }

  public getUniquePayers() {
    const itemPayers = this.tabItems
      .map(({ payers }) => payers.map(({ name }) => name))
      .flat();
    const splitPayers = this.tabSplit.map(({ name }) => name);
    const unique = new Set([...itemPayers, ...splitPayers]);
    return Array.from(unique);
  }

  public getTabSummary() {
    const payersLength = this.getUniquePayers().length;
    const variableWord = payersLength > 1 ? 'pessoas' : 'pessoa';
    const remainder = this.tabSplit.length > 0 ? 0 : this.calcRemainder();

    return {
      tabRemaining: formatCurrency(remainder),
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

  public removeItem(id: string) {
    const filter = this.tabItems.filter((item) => item.id !== id);
    this.tabItems = filter;
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

  public getItemDataByMode(mode: TabItemFormType, itemId?: string) {
    if (mode === 'edit') {
      return this.findItem(itemId);
    }

    if (mode === 'split') {
      const payers =
        this.tabSplit.length > 0
          ? this.tabSplit
          : this.getUniquePayers().map((p) => {
              return { name: p };
            });

      return {
        payers: payers,
        expenses: [],
        serviceFee: null,
      };
    }

    return {
      payers: [],
      expenses: [],
      serviceFee: null,
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

  public setSplitPayers(payers: TabPayerType[]) {
    this.tabSplit = payers;

    return this;
  }

  public removeSplit() {
    this.tabSplit = [];

    return this;
  }

  public getSplit() {
    return this.tabSplit;
  }

  public splitRemainder() {}

  public getSplitSummary() {
    const payersLength = this.tabSplit.length > 0 ? this.tabSplit.length : 1;

    return {
      payers: `(Restante) ${this.tabSplit.map(({ name }) => name).join(', ')}`,
      value: this.getRemainderCurrency(),
      details: formatCurrency(
        parseFloat((this.getRemaining() / payersLength).toFixed(2))
      ),
    };
  }

  public calcPayment(payer: string) {
    const lowercase = payer.toLocaleLowerCase();

    const items = this.tabItems.filter((item) =>
      item.payers.find((payer) => payer.name.toLocaleLowerCase() === lowercase)
    );

    const itemShare = items.map(
      ({ expenses, serviceFee, payers }) =>
        calcExpenseSumServiceFee(expenses, serviceFee?.percentage) /
        payers.length
    );

    const reduce = itemShare.reduce((value, current) => value + current, 0);

    const isSplit = this.tabSplit.find(
      ({ name }) => name.toLocaleLowerCase() === lowercase
    );

    const remainderShare = isSplit
      ? this.getRemaining() / this.tabSplit.length
      : 0;

    const total = reduce + remainderShare;

    return parseFloat(total.toFixed(2));
  }

  public getPayment(payer: string) {
    return {
      name: payer,
      payment: formatCurrency(this.calcPayment(payer)),
    };
  }

  public getAllPayments() {
    const payers = this.getUniquePayers();

    return payers.map((payer) => this.getPayment(payer));
  }

  public toJson() {
    return JSON.stringify({
      id: this.tabId,
      total: this.tabTotal,
      items: this.tabItems,
      split: this.tabSplit,
    });
  }

  public toClass(tab: string | null) {
    if (!tab) {
      return this;
    }

    const json = JSON.parse(tab);

    this.tabId = json.id;
    this.tabTotal = json.total;
    this.tabItems = json.items;
    this.tabSplit = json.split;

    return this;
  }
}
