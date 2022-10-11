import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:AppserviceService) { }
  getmarks : any;
  
  @Input() id:any='';
  
  ngOnInit(): void {
    this.service.getMarks(this.id).subscribe((res) => {
      return this.getmarks=res.data[0];
    	
    })
  }
  

}
