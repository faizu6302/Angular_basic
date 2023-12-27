import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { login } from "../login";
import { AppService } from "../app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent implements OnInit {
  userNameLoginPage = "";
  passwordLoginPage = "";

  // givePermissionForSignUp: boolean = true;
  givePermissionForCompany = false;  

  
  constructor(private loginDetailDataService: AppService) {
    
  }


  //LoginPage UserName and Password inputs

  clickedUName(event:any) {
    this.userNameLoginPage = event.target.value;
    
  }
  clickedPassword(event:any) {
    this.passwordLoginPage = event.target.value;
   
  }


  //checking for correct credentials , when clicked login button

  loginButtonClicked() {

    //checking for null details and trying to login

    if (this.userNameLoginPage === '' || this.passwordLoginPage === '') {
      alert("details are mandatory")
    }
    //go for further checking

    else {

      //checking if new user after signup trying to login
      if (this.loginDetailDataService.newUserNameAfterSignUp !== '' && this.loginDetailDataService.newUserPasswordAfterSignUp !== '' && this.userNameLoginPage === this.loginDetailDataService.newUserNameAfterSignUp && this.passwordLoginPage === this.loginDetailDataService.newUserPasswordAfterSignUp) {
        
        this.givePermissionForCompany = true;
      }
      else {

        //checking the current user details from predefined object

        for (let i of this.loginDetailDataService.predefinedLoginDetails) {
          if (i.uName === this.userNameLoginPage && i.password === this.passwordLoginPage) {

            this.givePermissionForCompany = true;

            break;
          }
        }
      }

    }

    //after checking all credentials , if all success , the user can login
    if (this.givePermissionForCompany ) {

      this.loginDetailDataService.userLogined = this.userNameLoginPage
      //login successful and company details shown
      // this.permissionToShowCompanyFromLogin.emit(true)
      this.loginDetailDataService.showCompanyPage = true;
      this.loginDetailDataService.showLoginPage = false;
    }

    //atlast if it didnt pass any case i.e , there is no user
    else if(this.userNameLoginPage !=='' && this.passwordLoginPage!== '') {
      alert("You Dont have account , Create One!!");
      this.userNameLoginPage = "";
      this.passwordLoginPage = "";
    }


  }


  //if user dont have account , directly pressing signup button , 

  signUpButtonClicked() {

    //permission for signUp is true

    // this.signUpPermissionFromLogin.emit(this.givePermissionForSignUp)

    this.loginDetailDataService.showSignUpPage = true
    this.loginDetailDataService.showLoginPage = false

     
     
    // this.loginStuObj.emit(this.loginDetailDataService.predefinedLoginDetails)
  }


  ngOnInit() { 

   
    // console.log(this.loginDetailDataService.userAccessFromLogin)
  }
}
