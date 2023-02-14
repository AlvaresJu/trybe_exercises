export default class Client {
  private _name: string | undefined;

  constructor(name: string) {
    this.name = name;
  }

  get name() { return this._name || ''; }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('"name" must have 3 or more characters.');
    } 
    this._name = newName;
  }
}
