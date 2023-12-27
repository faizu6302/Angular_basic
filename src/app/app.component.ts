import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { login } from './login';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {

  showLoginOrNot : boolean = false;
  showSignUpOrNot : boolean  = false;
  showCompanyOrNot : boolean = false;

  constructor( private appcompService : AppService){
    
  }

  ngOnInit(): void {
    this.showLoginOrNot = this.appcompService.showLoginPage;
    this.showSignUpOrNot = this.appcompService.showSignUpPage;
    this.showCompanyOrNot = this.appcompService.showCompanyPage;

    // If these properties in the service are supposed to be updated dynamically,
    // you might need to use observables in the service.
    // Example:
    // this.appcompService.showLoginPage.subscribe(value => this.showLoginOrNot = value);
  }

  
  

  // receivedDataFromLogin(signUpDetails:boolean){
  //   this.signUpOrNot = signUpDetails;
  //   this.showLOginPageOrNot = !signUpDetails
  //   // console.log(this.signUpOrNot)
  // }

  // ReceivedDataFromSignUp(value : boolean){
  //   this.signUpOrNot=value;
  //   this.showLOginPageOrNot = !value
  //   // console.log(this.signUpOrNot)
  // }

  // receivedDataFromLoginToSHowCompany(data : boolean){
  //   this.showCompanyOrNot = data;
  //   this.showLOginPageOrNot = !data;
  //   this.signUpOrNot = !data;
    

  // }

  
}
