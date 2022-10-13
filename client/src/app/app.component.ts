import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: AppserviceService) { }
  ngOnInit(): void {
    this.service.getAllData('login').subscribe((res) => {
      this.getdata = res.data
    })
  }

  getdata: any[] = [];
  password: any = '';
  id: any = '';
  isvalid: any = 'error';

  check(data: any) {
    this.password = data[1];
    this.id = data[0]


    for (let i of this.getdata) {
      if (i.id == this.id && i.password == this.password) {
        if (this.id[0] == 's') {
          this.isvalid = 'Student';
          break;
        } else if (this.id[0] == 't') {
          this.isvalid = 'Teacher';
          break;
        } else if (this.id == 'p0') {
          this.isvalid = 'Principal';
          break;
        }
      }
    }

  }

  getId() {
    return this.id;
  }

}
