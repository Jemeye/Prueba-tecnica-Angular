import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from "../interfaces/user.type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticatedUser: User = {
    active: true,
    lastName: "Reyes",
    secondLastName: "Elizondo",
    createDate: new Date(),
    id: 1,
    secondName: "David",
    firstName: "Juan"
  };

  private credentials = {
    username: "admin",
    password: "admin**"
  }

  constructor(private http: HttpClient) {
  }

  public getNames(names: {firstName?: boolean, secondName?: boolean, lastName?: boolean, secondLastName?: boolean}){
    // tslint:disable-next-line:prefer-const
    let output = [];
    if(names.firstName){
      output.push(AuthService.validateName(this._authenticatedUser.firstName));
    }
    if(names.secondName){
      output.push(AuthService.validateName(this._authenticatedUser.secondName));
    }
    if(names.lastName){
      output.push(AuthService.validateName(this._authenticatedUser.lastName));
    }
    if(names.secondLastName){
      output.push(AuthService.validateName(this._authenticatedUser.secondLastName));
    }
    return output.join(" ");
  }

  private static validateName(name: string){
    if(!name || name === "null" || name === "undefined"){
      return "";
    }
    return name;
  }

  getauthenticatedUser(userName: string, password: string) {
    if (userName === this.credentials.username && password === this.credentials.password) {
      //token to e used in the future to validate the session
      localStorage.setItem('token', '123456789');
      return true;
    } else {
      throw new Error("Invalid credentials");
    }
  }

  logout() {
    //remove token from local storage
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    //check if token is present in local storage
    return !!localStorage.getItem('token');
  }

}

