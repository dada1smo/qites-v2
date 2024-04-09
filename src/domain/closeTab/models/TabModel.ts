export default class TabModel {
  private tabTotal: number;

  constructor() {
    this.tabTotal = 0;
  }

  public setTotal(total: number) {
    this.tabTotal = total;
    return this.tabTotal;
  }

  public getTotal() {
    return this.tabTotal;
  }
}
