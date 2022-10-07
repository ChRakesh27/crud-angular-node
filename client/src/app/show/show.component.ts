import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:AppserviceService) { }
  getData : any;
  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res);
      this.getData=res.data;
    })
  }

}
