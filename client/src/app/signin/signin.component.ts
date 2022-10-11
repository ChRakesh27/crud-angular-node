import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service:AppserviceService) { }

  ngOnInit(): void {
  }
  userform=new FormGroup({
    'id':new FormControl('',Validators.required),
    'username':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
    'about':new FormControl('',Validators.required)
  })
  
  submit(){
    // console.log(this.userform);
    
    this.service.createData(this.userform.value,'login').subscribe((res)=>{
      // console.log(res);
      this.userform.reset();
      
    });
    
  }

}
