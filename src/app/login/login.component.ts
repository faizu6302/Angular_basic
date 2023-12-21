import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { login } from "../login.interface";
import { AppService } from "../app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent implements OnInit {
  userNameLoginPage = "";
  passwordLoginPage = "";
  givePermissionForSignUp: boolean = true;
  givePermissionForCompany = false;  
  

  @Output() signUpPermissionFromLogin = new EventEmitter<boolean>();
  @Output() permissionToShowCompanyFromLogin = new EventEmitter<boolean>()
  // @Output() loginStuObj = new EventEmitter<login []>()


  //getting new signup user details from signup page
  @Input() newUserNameAfterSignUp: string = ""
  @Input() newUserPasswordAfterSignUp: string = ""


  
  constructor(private loginDetailDataService: AppService) { }


  //LoginPage UserName and Password inputs

  clickedUName(Event) {
    this.userNameLoginPage = Event.target.value;
    
  }
  clickedPassword(Event) {
    this.passwordLoginPage = Event.target.value;
   
  }


  //checking for correct credentials , when clicked login button

  checkEntry() {

    //checking for null details and trying to login

    if (this.userNameLoginPage === '' || this.passwordLoginPage === '') {
      alert("details are mandatory")
    }
    //go for further checking

    else {

      //checking if new user after signup trying to login
      if (this.newUserNameAfterSignUp !== '' && this.newUserPasswordAfterSignUp !== '' && this.userNameLoginPage === this.newUserNameAfterSignUp && this.passwordLoginPage === this.newUserPasswordAfterSignUp) {
        
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

      //login successful and company details shown
      this.permissionToShowCompanyFromLogin.emit(true)
    }

    //atlast if it didnt pass any case i.e , there is no user
    else if(this.userNameLoginPage !=='' && this.passwordLoginPage!== '') {
      alert("You Dont have account , Create One!!");
      this.userNameLoginPage = "";
      this.passwordLoginPage = "";
    }


  }


  //if user dont have account , directly pressing signup button , 

  signUp() {

    //permission for signUp is true

    this.signUpPermissionFromLogin.emit(this.givePermissionForSignUp)

    // this.loginStuObj.emit(this.loginDetailDataService.predefinedLoginDetails)
  }


  ngOnInit() { }
}
