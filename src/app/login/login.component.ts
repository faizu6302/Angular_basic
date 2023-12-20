import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { login } from "../login.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent implements OnInit {
  userName = "";
  password = "";
  signUpDetails: boolean = true;
  givePermission = false;  
  // signupEntry : boolean = false;
  // companyEntry : boolean = false;

  @Output() dataFromLogin = new EventEmitter<boolean>();
  @Output() dataToShowCompany = new EventEmitter<boolean>()
  @Output() loginStuObj = new EventEmitter<login []>()

  @Input() new_u: string = ""
  @Input() new_p: string = ""


  loginDetails: login[] = [
    {
      uName: "faizan",
      password: "faizu123",
      type : "superAdmin"
    },
    {
      uName: "amod",
      password: "amod123",
      type : "admin"
    },
    {
      uName: "prateek",
      password: "pratek123",
      type : "superAdmin"
      
    },
    {
      uName: "kruteek",
      password: "kruteek123",
      type : "admin"
    },
    {
      uName: "shoaib",
      password: "shoaib123",
      type : "admin"
    },
  ];

  constructor() { }

  clickedUName(Event) {
    this.userName = Event.target.value;
    // console.log(this.userName)
    // Event.target.value=''
  }
  clickedPassword(Event) {
    this.password = Event.target.value;
    // console.log(this.password)
    // console.log(this.userName)
    // Event.target.value =''
  }

  checkEntry() {


    // 
    if (this.userName === '' || this.password == '') {
      alert("details are mandatory")
    }
    else {


      if (this.new_u !== '' && this.new_p !== '' && this.userName === this.new_u && this.password === this.new_p) {
        
        this.givePermission = true;
      }
      else {
        for (let i of this.loginDetails) {
          if (i.uName === this.userName && i.password === this.password) {

            this.givePermission = true;

            break;
          }
        }
      }

    }


    if (this.givePermission ) {
      this.dataToShowCompany.emit(true)
    }
    else if(this.userName !=='' && this.password!== '') {
      alert("You Dont have account , Create One!!");
      this.userName = "";
      this.password = "";
    }


  }

  signUp() {
    this.dataFromLogin.emit(this.signUpDetails)
    this.loginStuObj.emit(this.loginDetails)
  }


  ngOnInit() { }
}
