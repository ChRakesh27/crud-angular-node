import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 password :any = '';
id:any='';
 check(data:any){
  this.password=data[1];
  this.id=data[0]
 }

getId(){
  return this.id;
}

}
