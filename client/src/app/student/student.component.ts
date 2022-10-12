import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: AppserviceService) { }
  getmarks: any;
  total: any = '';
  per: any = '';

  @Input() id: any = '';

  ngOnInit(): void {

    this.service.getMarks(this.id).subscribe((res) => {
      this.getmarks = res.data[0];
      console.log("🚀 ~ res.data", res.data)
      this.total = Number(this.getmarks.english) + Number(this.getmarks.science) + Number(this.getmarks.maths) + Number(this.getmarks.computer) + Number(this.getmarks.arts);
      this.per = Number(this.total) / 5;
    })
    console.log("🚀 ~ this.getmarks", this.getmarks)

  }

}
