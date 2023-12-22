import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { CompanyDetails } from "../company.interface";



@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {

  //details of company of type company details interface
  companyInfo: CompanyDetails[] = [];

  userPermissionType : string = ""


  objToEditCompany = {};
  showEditComponent = false;

  constructor(private serviceInCompany: AppService) { 
    this.userPermissionType = this.serviceInCompany.getAccessType();
    
  }

  onClickEditButton(obj: any) {
   
    this.serviceInCompany.showEditComponent = true;
    this.serviceInCompany.objToEditCompany = obj;
    
  }


  ngOnInit() {
      this.companyInfo = this.serviceInCompany.companyDetail
  }
}