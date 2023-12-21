import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppService } from '../app.service';



@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnChanges {

  reCompanyName :string ="";
  reRegistrationNumber : number ;
  reAddress : string = "";
  rePhone : number ;
  reEmail : string;
  reFounder : string = ""
  value = true

  @Input() objFromCompany : any;

  


  constructor( private service_edit : AppService) {}

  ngOnChanges() {
    this.reCompanyName = this.objFromCompany.CompanyName;
    this.reRegistrationNumber = this.objFromCompany.RegistrationNumber;
    this.reAddress = this.objFromCompany.Address;
    this.rePhone = this.objFromCompany.Phone;
    this.reEmail = this.objFromCompany.Email;
    this.reFounder = this.objFromCompany.Founder;
  }

  onSave(){
    
    this.objFromCompany.CompanyName=this.reCompanyName;
    this.objFromCompany.RegistrationNumber = this.reRegistrationNumber;
    this.objFromCompany.Address = this.reAddress;
    this.objFromCompany.Phone = this.rePhone ;
    this.objFromCompany.Email = this.reEmail;
    this.objFromCompany.Founder = this.reFounder;

    // this.value = false
    this.service_edit.showValue = false;


  }
  ondont(){
    this.service_edit.showValue = false;
  }
  
  

}
