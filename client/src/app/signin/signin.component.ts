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
    'username':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  })
  
  submit(){
    // console.log(this.userform);
    
    this.service.createData(this.userform.value).subscribe((res)=>{
      // console.log(res);
      this.userform.reset();
      
    });
    
  }

}
