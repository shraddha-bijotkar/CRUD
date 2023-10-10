import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs-compat/add/observable/interval';
import { HttpClient } from '@angular/common/http';
import { contactModel, dummyContact, dummyGetAllContacts } from '../contact.model';
const baseUrl = 'https://dotapi.devhub.in/api/WebUser';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIzZjc4Mzc5ZS0zMmMzLTRjMDUtYmRmZC05MjM5MWYyYjliZjkiLCJpYXQiOjE2OTY5NTE0NjAsIlVzZXJJZCI6IjE0IiwiVXNlclJvbGUiOiIxIiwiVXNlck5hbWUiOiJWVlIiLCJFbWFpbCI6ImFkbWluQHZ2cnNlYWZvb2RzLmNvbSIsIkNpZCI6IjEwMDUsMSIsIk1JZCI6IiIsIk1JZE5hbWVzIjoiTUlOIzAxLE1JTiMwMixNSU4jMDMiLCJEZWZhdWx0Q29tcGFueSI6IjEwMDUiLCJuYmYiOjE2OTY5NTE0NjAsImV4cCI6MTY5NzAzNzg2MCwiaXNzIjoiSldUQXV0aGVudGljYXRpb25TZXJ2ZXIiLCJhdWQiOiJKV1RTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.WjZQE2j53Y0K7bB29rTS7g6NZ1wwo2Jod9I6PEHCUvs";
const headers = { 'Authorization': 'Bearer ' + token };
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  create(data: contactModel): Observable<any> {
    return this.http.post(baseUrl + '/AddContactRegistration', data);
  }

  getAllContacts(companyId: string): Observable<any> {
    return this.http.post(baseUrl + '/GetContactProfiles', {"CompanyId": companyId} , {headers});
    //For returning static data
    //return dummyGetAllContacts;
  }
  updateContact(contact: contactModel): Observable<any> {
    return this.http.post(baseUrl + '/UpdateContactRegistration', contact , {headers});
  }
  getContactById(companyId: string, companyBasicId: number): Observable<any> {
    console.log(this.http.post(baseUrl + '/GetContactProfilesById', {"CompanyId": companyId, "companyBasicId": companyBasicId} , {headers}));
    return this.http.post(baseUrl + '/GetContactProfilesById', {"CompanyId": companyId, "companyBasicId": companyBasicId} , {headers});
  }

  deleteContactById(companyBasicId: number): Observable<any> {
    return this.http.post(baseUrl + '/DeleteContactRegistration', {"CompanyBasicId": companyBasicId} , {headers});
    //For returning static data
    //return dummyGetAllContacts;
  }

}
