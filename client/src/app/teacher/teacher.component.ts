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

  update(data: any) {
    this.updatemarks.value.id = data;
    this.toast.success('updated..!', data);
    this.service.updateMarks(this.updatemarks.value, this.subject).subscribe((res) => {
      console.log("🚀 ~ this.updatemarks.value", this.updatemarks.value)

      this.updatemarks.reset();
    })
    // window.location.reload()
    // this.reloadComponent(true);
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
