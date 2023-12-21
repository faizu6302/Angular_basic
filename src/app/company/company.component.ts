import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { CompanyDetails } from "../company.interface";


@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {

companyInfo : CompanyDetails[];
onlyTableShow : boolean = true;

dataToBeChange : object;

permissionToShow : string; 
  

  constructor( private service2 : AppService) {

    this.companyInfo = this.service2.companyDetail
    
   
  }

  onClickEditButton(obj : any){
    // this.onlyTableShow = false;
    this.service2.showValue = true;
    this.dataToBeChange = obj;
   
  }


  ngOnInit() {
    this.permissionToShow = this.service2.givePermission;
  }
}
