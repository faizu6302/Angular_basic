import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { login } from '../login.interface';
import { AppService } from '../app.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  UName: string = ""
  PWord: string = ""
  RPWord: string = ""
  permission :string = ""

  userRepeated = false;
  chechUsersToLogin: login[]

  @Input() chechUsersToLogin1: login[]

  @Output() SignUpDone = new EventEmitter<boolean>();
  @Output() SignUpDone1 = new EventEmitter<string>();
  @Output() SignUpDone2 = new EventEmitter<string>();

  constructor(private appService: AppService) {

    this.chechUsersToLogin = appService.loginDetails
    console.log(this.chechUsersToLogin)


  }

  newRegistration() {
    console.log(this.PWord)
    console.log(this.UName)
    console.log(this.RPWord)
    console.log(this.permission)

    // for (let item of this.chechUsersToLogin) {
    //   if (item.uName == this.UName) {
    //     this.userRepeated = true;
    //     break
    //   }
    // }

    // // console.log(this.userRepeated)

    // if (this.userRepeated === false) {

    //   if (this.UName === '' || this.PWord === '' || this.RPWord === '') {
    //     alert("Details are mandatory")
    //       this.UName = ''
    //       this.PWord = ''
    //       this.RPWord = ''
    //   }
    //   else if (this.PWord === this.RPWord) {


    //     this.SignUpDone.emit(false)
    //     this.SignUpDone1.emit(this.UName)
    //     this.SignUpDone2.emit(this.PWord)

    //   }
    //   else {
    //     alert("password mismatch")
    //     this.UName = ''
    //       this.PWord = ''
    //       this.RPWord = ''
    //   }
    // }
    // else {
    //   alert("you are already our user")
    //   this.UName = ''
    //       this.PWord = ''
    //       this.RPWord = ''
    // }
  }
  ngOnInit() {
  }

}
