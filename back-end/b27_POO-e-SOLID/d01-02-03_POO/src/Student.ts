import crypto from 'node:crypto';
import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = Student.generateEnrollment();
  }

  get enrollment() { return this._enrollment; }

  set enrollment(newEnrollment: string) {
    if (newEnrollment.length < 16) {
      throw new Error('The "enrollment" must have at least 16 characters.');
    }
    this._enrollment = newEnrollment;
  }

  get examsGrades() { return this._examsGrades; }

  set examsGrades(grades: number[]) {
    if (grades.length > 4) {
      throw new Error('Only 4 test grades can be registered.');
    }
    this._examsGrades = grades;
  }

  get worksGrades() { return this._worksGrades; }

  set worksGrades(grades: number[]) {
    if (grades.length > 2) {
      throw new Error('Only 2 work grades can be registered.');
    }
    this._worksGrades = grades;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((total, grade) => total + grade);
  }

  sumAverageGrade(): number {
    const scoreQuantity = this._examsGrades.length + this._worksGrades.length;
    return this.sumGrades() / scoreQuantity;
  }

  static generateEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}
