import { Injectable } from "@angular/core";
import { login } from "./login.interface";
import { CompanyDetails } from "./company.interface";
// import { CompanyEditService } from "./company-edit.service";

@Injectable({
    providedIn: 'root'
})

export class AppService {

  showValue :boolean = false;

    givePermission :string ;

    predefinedLoginDetails: login[] = [
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

      companyDetail : CompanyDetails[] = [
        {
          CompanyName: "ABC Electronics",
          RegistrationNumber: 12345,
          Address: "123 Main St, Cityville, ST, 54321",
    
          Phone: 1234567,
          Email: "info@abc-electronics.com",
    
          Founder: "John Smith",
          isActive :true
        },
        {
          CompanyName: "XYZ Pharmaceuticals",
          RegistrationNumber: 54321,
          Address: "456 Oak Ave, Townsville, ST, 12345",
    
          Phone: 9876543,
          Email: "info@xyzpharma.com",
    
          Founder: "Dr. Sarah Johnson",
          isActive :false
        },
        {
          CompanyName: "Tech Innovators Inc.",
          RegistrationNumber: 67890,
          Address: "789 Tech Park, Innovation City, ST, 98765",
    
          Phone: 4567890,
          Email: "info@techinnovators.com",
    
          Founder: "Alex Thompson",
          isActive :true
        },
        {
          CompanyName: "Green Energy Solutions",
          RegistrationNumber: 34567,
          Address: "234 Renewable St, Ecotown, ST, 45678",
    
          Phone: 2345678,
          Email: "info@greenenergy.com",
    
          Founder: "Emily Green",
          isActive :false
        },
        {
          CompanyName: "Fashion Trends Ltd.",
          RegistrationNumber: 89012,
          Address: "567 Fashion Ave, Style City, ST, 34567",
    
          Phone: 5678901,
          Email: "info@fashiontrends.com",
    
          Founder: "David Fashionista",
          isActive :true
        },
      ];

      changeCompanyData(compN : string,regN:number,addr:string,phone:number,email :string,founder:string , index :number){
            
        for(let item of this.companyDetail){
          let i = 0;
          if(i === index){
            if(compN !== ''){
              item.CompanyName = compN;
            }
          }
        }
      }

      

}