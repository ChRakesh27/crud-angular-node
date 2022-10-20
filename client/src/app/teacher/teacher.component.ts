import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: AppserviceService, private toast: ToastrService) {

  }
  @Input() user: any = ''
  subject: any;
  getmarks: any;
  id: any;
  change: any = false;
  mar: any = [];

  ngOnInit(): void {
    this.service.getAllData('marks').subscribe((res) => {
      this.getmarks = res.data;
      console.log("🚀 ~ this.getmarks", this.getmarks)
      this.mar.push(this.getmarks)
      console.log("🚀 ~ this.mar", this.mar[0])
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

  update(data: any) {
    this.updatemarks.value.id = data;
    this.mar[0][(data[1]) - 1][this.subject] = this.updatemarks.value.value;
    this.toast.success('updated..!', data);
    this.service.updateMarks(this.updatemarks.value, this.subject).subscribe((res) => {
      this.updatemarks.reset();
    })
  }

  displayStyle = "none";
  updatePopup(id: any) {
    this.id = id;
    this.displayStyle = 'block';
  }
  cancelPopup() {
    this.displayStyle = 'none'
  }
}
