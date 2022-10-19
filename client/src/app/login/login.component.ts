import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AppserviceService) { }

  ngOnInit(): void {
  }

  id: any = '';
  password: any = '';
  @Output()
  login: EventEmitter<any> = new EventEmitter<any>();


  emitted() {
    this.login.emit([this.id, this.password]);
  }


}
