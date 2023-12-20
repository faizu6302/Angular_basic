import { Injectable } from "@angular/core";
import { login } from "./login.interface";

@Injectable({
    providedIn: 'root'
})

export class AppService {

    loginDetails: login[] = [
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

}