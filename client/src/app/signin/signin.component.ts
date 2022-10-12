import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service: AppserviceService) { }

  ngOnInit(): void {
  }
  userform = new FormGroup({
    'id': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'about': new FormControl('', Validators.required)
  })

  marksform = new FormGroup({
    'id': new FormControl(this.userform.value.id),
    'english': new FormControl('-'),
    'science': new FormControl('-'),
    'maths': new FormControl('-'),
    'computer': new FormControl('-'),
    'arts': new FormControl('-')

  })
  submit() {
    this.service.createData(this.userform.value, 'login').subscribe((res) => {
    });
    this.marksform.value.id = this.userform.value.id;
    this.service.createData(this.marksform.value, 'marks').subscribe((res) => {
      this.marksform.reset()
      this.userform.reset();
    })
    console.log("🚀 ~ this.marksform.value", this.marksform.value)

  }

}
