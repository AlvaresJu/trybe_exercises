export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name() { return this._name; }

  set name(nameValue: string) {
    if (nameValue.length < 3) {
      throw new Error('"name" must have 3 or more characters.');
    }
    this._name = nameValue;
  }
}
