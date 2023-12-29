import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { CompanyDetails } from "../company";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {

  //details of company of type company details interface
  companyInfo: CompanyDetails[] = [];

  userPermissionType : string = ""

  compNameSearch : string = '';
  parameter : string |null =''

  


  objToEditCompany = {};
  showEditComponent = false;

  

  constructor(private serviceInCompany: AppService,private router:Router,private activeRoute :ActivatedRoute) { 
    this.userPermissionType = this.serviceInCompany.getAccessType();

    const passedData = this.activeRoute.snapshot.queryParams.myData;
    console.log('Passed Data:', passedData);
  
    
  }



  onClickEditButton(obj: any) {
   
    this.serviceInCompany.showEditComponent = true;
    this.serviceInCompany.objToEditCompany = obj;
    this.router.navigate(['company-edit'],{relativeTo:this.activeRoute})
    
  }
  logoutClicked(){
    this.router.navigate(['/login'])
  }


  ngOnInit() {
      this.companyInfo = this.serviceInCompany.companyDetail

     
      
  }
}