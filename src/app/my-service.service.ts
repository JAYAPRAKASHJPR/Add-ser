import { Injectable } from '@angular/core';
export type Users = {
  id: Number;
  name: String;
  Address: String;
};
@Injectable()
export class MyServiceService {
  public user: Users[] = [{ id: 1, name: 'jp', Address: 'Kilakku thottam' }];
  public counter: number = 2;

  constructor() {}
  IncreaseCount() {
    return this.counter++;
  }
  onSave(x) {
    this.user.push(x);
  }
}
