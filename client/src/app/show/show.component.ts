import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service: AppserviceService) { }
  getData: any;
  ngOnInit(): void {
    this.service.getAllData('login').subscribe((res) => {
      // console.log(res);
      this.getData = res.data;
    })
  }
  userinf: any = 'Student';

  select(data: any) {
    this.userinf = data
  }
  delete(user: any) {
    console.log(user);
    this.service.deleteData(user).subscribe((res) => {
      console.log(res);
      this.getData = res.data;
    })
  }




}
