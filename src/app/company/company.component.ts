import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {
  companyDetails = [
    {
      CompanyName: "ABC Electronics",
      RegistrationNumber: "12345",
      Address: "123 Main St, Cityville, ST, 54321",

      Phone: "+1 (555) 123-4567",
      Email: "info@abc-electronics.com",

      Founder: "John Smith",
      isActive :true
    },
    {
      CompanyName: "XYZ Pharmaceuticals",
      RegistrationNumber: "54321",
      Address: "456 Oak Ave, Townsville, ST, 12345",

      Phone: "+1 (555) 987-6543",
      Email: "info@xyzpharma.com",

      Founder: "Dr. Sarah Johnson",
      isActive :false
    },
    {
      CompanyName: "Tech Innovators Inc.",
      RegistrationNumber: "67890",
      Address: "789 Tech Park, Innovation City, ST, 98765",

      Phone: "+1 (555) 456-7890",
      Email: "info@techinnovators.com",

      Founder: "Alex Thompson",
      isActive :true
    },
    {
      CompanyName: "Green Energy Solutions",
      RegistrationNumber: "34567",
      Address: "234 Renewable St, Ecotown, ST, 45678",

      Phone: "+1 (555) 234-5678",
      Email: "info@greenenergy.com",

      Founder: "Emily Green",
      isActive :false
    },
    {
      CompanyName: "Fashion Trends Ltd.",
      RegistrationNumber: "89012",
      Address: "567 Fashion Ave, Style City, ST, 34567",

      Phone: "+1 (555) 567-8901",
      Email: "info@fashiontrends.com",

      Founder: "David Fashionista",
      isActive :true
    },
  ];

  constructor() {}

  ngOnInit() {}
}
