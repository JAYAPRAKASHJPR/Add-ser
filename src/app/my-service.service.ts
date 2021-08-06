import { Injectable } from '@angular/core';
export type Users = {
  id: Number;
  name: String;
  Address: String;
};
@Injectable()
export class MyServiceService {
  public user: Users[] = [{ id: 1, name: 'jp', Address: 'Kilakku thottam' }];
  constructor() {}
  onSave(x) {
    this.user.push(x);

    console.log(this.user);
  }
}
