export default class OrderItem {
  private _item: string | undefined;
  private _price = 0;

  constructor(item: string, price: number) {
    this.item = item;
    this.price = price;
  }

  get item() { return this._item || ''; }

  set item(newItem: string) {
    if (newItem.length < 3) {
      throw new Error('"order" must have 3 or more characters.');
    } 
    this._item = newItem;
  }

  get price() { return this._price; }

  set price(newPrice: number) {
    if (newPrice <= 0) {
      throw new Error('"price" must be grater then 0.');
    }
    this._price = newPrice;
  }
}
