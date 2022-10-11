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
    this.service.getAllData().subscribe((res) => {
      // console.log("🚀 ~ res", res.data)

      this.getdata = res.data
      console.log("🚀 ~ getdata", this.getdata)
    })
  }
  getdata: any[] = [];
  password: any = '';
  id: any = '';
  error: boolean = true;
  check(data: any) {
    this.password = data[1];
    this.id = data[0]
  }

  getId() {
    return this.id;
  }

}
