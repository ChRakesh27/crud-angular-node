import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: AppserviceService) { }

  ngOnInit(): void {
  }
  marksform = new FormGroup({
    'id': new FormControl('', Validators.required),
    'english': new FormControl('', Validators.required),
    'science': new FormControl('', Validators.required),
    'maths': new FormControl('', Validators.required),
    'computer': new FormControl('', Validators.required),
    'arts': new FormControl('', Validators.required)

  })
  submit() {
    this.service.createData(this.marksform.value, 'marks').subscribe((res) => {
      this.marksform.reset()
    })
  }

}
