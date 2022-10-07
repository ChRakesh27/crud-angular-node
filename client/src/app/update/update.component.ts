import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:AppserviceService) { }
  
  ngOnInit(): void {
  }
  updateform=new FormGroup({
    id:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  submit(){
    this.service.updateDate(this.updateform.value).subscribe((res)=>{
      this.updateform.reset();
    })
  }

}
