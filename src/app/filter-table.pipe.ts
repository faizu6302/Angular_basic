import { Pipe, PipeTransform } from "@angular/core";
import { CompanyDetails } from "./company";

@Pipe({
    name:'filterPipe'
})

export class FilterTablePipe implements PipeTransform{

    transform(companyObj: CompanyDetails[], type : string) {
        
        if(type === '' || companyObj.length === 0){
            return companyObj;
        }
        else{

            return companyObj.filter((value)=>{
                return value.Type.toLowerCase() === type.toLowerCase();

            })

        }
    }

  

}