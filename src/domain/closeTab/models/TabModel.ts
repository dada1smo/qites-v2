export default class TabModel {
  private tabTotal: number;
  private tabRemaining: number;
  private tabPayers: any[];

  constructor() {
    this.tabTotal = 0;
    this.tabRemaining = 0;
    this.tabPayers = [];
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
      tabRemaining: `R$ ${this.tabRemaining.toFixed(2)}`,
      tabPayers: this.tabPayers.length,
    };
  }

  public duplicate(tab: TabModel) {
    this.tabTotal = tab.getTotal();
    this.tabRemaining = tab.getRemaining();
    return this;
  }
}
