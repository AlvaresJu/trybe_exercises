export default class Student {
  private _registration: string;
  private _name: string | undefined;
  private _testScores: number[];
  private _workScores: number[];

  constructor(registration: string, name: string) {
    this._registration = registration;
    this.name = name;
    this._testScores = [];
    this._workScores = [];
  }

  get registration() { return this._registration; }
 
  get name() { return this._name || ''; }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('"name" must have 3 or more characters.');
    } 
    this._name = newName;
  }

  get testScores() { return this._testScores; }

  set testScores(scores: number[]) {
    if (scores.length > 4) {
      throw new Error('Only 4 test scores can be registered.');
    }
    this._testScores = scores;
  }

  get workScores() { return this._workScores; }

  set workScores(scores: number[]) {
    if (scores.length > 2) {
      throw new Error('Only 2 work scores can be registered.');
    }
    this._workScores = scores;
  }

  calculateTotalScore(): number {
    return [...this._testScores, ...this._workScores]
      .reduce((total, score) => total + score);
  }

  calculateAverageScore(): number {
    const scoreQuantity = this._testScores.length + this._workScores.length;
    return this.calculateTotalScore() / scoreQuantity;
  }
}
