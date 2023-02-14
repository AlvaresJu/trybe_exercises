export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name() { return this._name; }

  set name(nameValue: string) {
    if (nameValue.length < 3) {
      throw new Error('"name" must have 3 or more characters.');
    }
    this._name = nameValue;
  }

  get birthDate() { return this._birthDate; }

  set birthDate(birthDateValue: Date) {
    if (birthDateValue.getTime() > Date.now()) {
      throw new Error('"birthDate" can not be a date in the future.');
    }

    const dateDiffMs = Date.now() - birthDateValue.getTime();
    const age = Math.round(dateDiffMs / 31536000000);
    if (age > 120) {
      throw new Error('"Person" can not be older than 120 years.');
    }
    this._birthDate = birthDateValue;
  }
}
