import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: AppserviceService) { }
  @Input() user: any = ''
  subject: any;
  getmarks: any;
  id: any;
  change: any = false;
  mar: any = '';
  ngOnInit(): void {
    this.service.getAllData('marks').subscribe((res) => {
      this.getmarks = res.data;
    })
    console.log("🚀 ~ this.user", this.user)

    if (this.user == 't1') {
      this.subject = 'english';
    } else if (this.user == 't2') {
      this.subject = 'science';
    } else if (this.user == 't3') {
      this.subject = 'maths';
    } else if (this.user == 't4') {
      this.subject = 'computer';
    } else {
      this.subject = 'arts';
    }
  }
  updatemarks = new FormGroup({
    id: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  })

  update(data: any, cha: boolean) {
    this.id = data;
    this.change = cha;
    this.updatemarks.value.id = data;
    this.service.updateMarks(this.updatemarks.value, this.subject).subscribe((res) => {
      this.updatemarks.reset();
    })
  }
}
