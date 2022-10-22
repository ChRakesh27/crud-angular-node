import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private service: AppserviceService, private toast: ToastrService) { }

  ngOnInit(): void {
    console.log(this.userform.value.img);
  }
  userform = new FormGroup({
    'id': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'about': new FormControl('Student', Validators.required),
    'img': new FormControl(Validators.required),
  })

  marksform = new FormGroup({
    'id': new FormControl(this.userform.value.id),
    'english': new FormControl(),
    'science': new FormControl(),
    'maths': new FormControl(),
    'computer': new FormControl(),
    'arts': new FormControl()
  })
  update() {
    console.log("hello");
    console.log(this.userform.value.img);

    if (this.userform.value.id != '' && this.userform.value.username != '' && this.userform.value.password != '') {
      this.service.updateDate(this.userform.value).subscribe((res) => {
        this.toast.success("Updated...!", this.userform.value.id);
        this.userform.reset();
      })
    }
  }
  submit() {
    console.log(this.userform.value.img);

    if (this.userform.value.id != '' && this.userform.value.username != '' && this.userform.value.password != '') {

      this.service.createData(this.userform.value, 'login').subscribe((res) => {
      });
      this.marksform.value.id = this.userform.value.id;
      this.service.createData(this.marksform.value, 'marks').subscribe((res) => {
        this.toast.success("Created..!", this.userform.value.id);
        this.marksform.reset()
        this.userform.reset();
      })
      console.log("🚀 ~ this.marksform.value", this.marksform.value)
    }

  }

}
