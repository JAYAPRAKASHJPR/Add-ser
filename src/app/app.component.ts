import { Component, VERSION, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  users: Object;
  Uname: String = '';
  uadd: String = '';
  data: Object;
  public fullData;
  constructor(public myservicee: MyServiceService) {}

  onclick() {
    var   ids = this.myservicee.IncreaseCount();
    this.data = { id: ids, name: this.Uname, Address: this.uadd };

    this.myservicee.onSave(this.data);
  }
  ngOnInit() {
    this.fullData = this.myservicee.user;
  }
}
