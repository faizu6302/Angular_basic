import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppService } from '../app.service';



@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnChanges,OnInit {

  reCompanyName: string = "";
  reRegistrationNumber: number | undefined ;
  reAddress: string = "";
  rePhone: number | undefined ;
  reEmail: string = "";
  reFounder: string = ""

  dontHideSaveAndDonot = false;
  

  objFromCompany: any;

  constructor(private serviceCompanyEdit: AppService) {
}
  
  ngOnInit(): void {
    this.objFromCompany = this.serviceCompanyEdit.objToEditCompany;
    // console.log(this.objFromCompany)
    this.reCompanyName = this.objFromCompany.CompanyName;
    this.reRegistrationNumber = this.objFromCompany.RegistrationNumber;
    this.reAddress = this.objFromCompany.Address;
    this.rePhone = this.objFromCompany.Phone;
    this.reEmail = this.objFromCompany.Email;
    this.reFounder = this.objFromCompany.Founder;
  }

  ngOnChanges() {
    
  }

  onSave() {
    this.objFromCompany.CompanyName = this.reCompanyName;
    this.objFromCompany.RegistrationNumber = this.reRegistrationNumber;
    this.objFromCompany.Address = this.reAddress;
    this.objFromCompany.Phone = this.rePhone;
    this.objFromCompany.Email = this.reEmail;
    this.objFromCompany.Founder = this.reFounder;

    // 
    this.serviceCompanyEdit.showEditComponent = false;
    
    
    alert("Changes Saved Successfully....")
    
  }
  
  
  ondont() {
    
    this.serviceCompanyEdit.showEditComponent = false;
    alert("No Changes Found...")
  }



}
