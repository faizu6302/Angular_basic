import { Component } from '@angular/core';
import { login } from './login.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {

  new_user:string = "";
  new_user_password = "";

  loginDetails : login[];
  
  signUpOrNot :boolean  = false;
  showCompanyOrNot :boolean = false;
  showLOginPage :boolean = true;

  submitted(value){
    // console.log(value)
  }

  objReceive(loginData:login[]){

    this.loginDetails = loginData;
    // console.log(loginData)

  }

  receivedDataFromLogin(signUpDetails:boolean){
    this.signUpOrNot = signUpDetails;
    this.showLOginPage = !signUpDetails
    // console.log(this.signUpOrNot)
  }

  ReceivedDataFromSignUp(value : boolean){
    this.signUpOrNot=value;
    this.showLOginPage = !value
    // console.log(this.signUpOrNot)
  }

  receivedDataFromLoginToSHowCompany(data : boolean){
    this.showCompanyOrNot = data;
    this.showLOginPage = !data;
    this.signUpOrNot = !data;
    

  }

  ReceivedNewUserName(uname : string){
      this.new_user = uname;
      // console.log(this.new_user)
  }
  ReceivedNewUserPassword(upass : string){
      this.new_user_password = upass;
      // console.log(this.new_user_password)

  }
}
