import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: AppserviceService, private toast: ToastrService) { }
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
          this.toast.success('success!');
          break;
        } else if (this.id[0] == 't') {
          this.isvalid = 'Teacher';
          this.toast.success('success!');
          break;
        } else if (this.id == 'p0') {
          this.isvalid = 'Principal';
          this.toast.success('success!');
          break;
        }
      }
    }
    if (this.isvalid == 'error')
      this.toast.error('Error!');
  }

  getId() {
    return this.id;
  }

}
