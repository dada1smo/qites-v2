import { formatCurrency } from '@/src/utils/format';
import { TabPayerType } from '../types/TabPayerType';
import { TabItemType } from '../types/TabItemType';
import { calcExpenseSumServiceFee } from '@/src/utils/calc';

export default class TabModel {
  private tabId: string | undefined;
  private tabTotal: number;
  private tabRemaining: number;
  private tabItems: TabItemType[];

  private tabPayers: TabPayerType[];

  constructor() {
    this.tabTotal = 0;
    this.tabRemaining = 0;
    this.tabPayers = [];
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
    this.tabRemaining = tab.getRemaining();
    this.tabItems = tab.getItems();
    return this;
  }

  public setTotal(total: number) {
    this.tabTotal = parseFloat(total.toFixed(2));
    this.tabRemaining = parseFloat(total.toFixed(2));
    return this;
  }

  public getTotal() {
    return parseFloat(this.tabTotal.toFixed(2));
  }

  public getRemaining() {
    return this.tabRemaining;
  }

  public getTabSummary() {
    return {
      tabRemaining: formatCurrency(this.tabRemaining),
      tabPayers: this.tabPayers.length,
    };
  }

  public addItem(item: TabItemType) {
    const items = [...this.tabItems, item];
    this.tabItems = items;
    return this;
  }

  public getItems() {
    return this.tabItems;
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
