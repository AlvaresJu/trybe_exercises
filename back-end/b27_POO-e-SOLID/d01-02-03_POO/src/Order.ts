import Client from './Client';
import OrderItem from './OrderItem';

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _payment: string | undefined;
  private _discount = 0;

  constructor(
    clinet: Client,
    items: OrderItem[],
    payment: string,
    discount: number,
  ) {
    this._client = clinet;
    this.items = items;
    this.payment = payment;
    this.discount = discount;
  }

  get client() { return this._client; }

  set client(newClient: Client) { this._client = newClient; }

  get items() { return this._items; }

  set items(newItems: OrderItem[]) {
    if (newItems.length === 0) {
      throw new Error('at least one item is required');
    }
    this._items = newItems;
  }

  get payment() { return this._payment || ''; }

  set payment(paymentType: string) {
    if (paymentType.length < 3) {
      throw new Error('"payment" must have 3 or more characters.');
    }
    this._payment = paymentType;
  }

  get discount() { return this._discount; }

  set discount(newDiscount: number) {
    if (newDiscount < 0 || newDiscount > 1) {
      throw new Error('"discount" need to be a percentage value.');
    }
    this._discount = newDiscount;
  }

  orderCost() {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  orderCostWithDiscount() {
    const rawCost = this.orderCost();
    return rawCost * (1 - this.discount);
  }
}