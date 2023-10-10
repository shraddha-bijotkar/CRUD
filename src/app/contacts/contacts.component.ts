import { Component, OnInit } from '@angular/core';
import { contactModel } from '../contact.model';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  searchText: string = '';
  form!: FormGroup;
    loading = false;
    submitted = false;
    error?: string;
    
  allContacts: contactModel[] = [];
  updatedContact: contactModel[] = [];
  isTableHidden: boolean = false;
  constructor(private authSerice: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    //this.allContacts = this.authSerice.getAllContacts('DEF56C4F-808D-4F81-993C-EF67C77A5F91');
    this.authSerice.getAllContacts('DEF56C4F-808D-4F81-993C-EF67C77A5F91')
    
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.allContacts = res;
        return res;
      },
      error: (e: any) => {
        console.error(e);
      } 
    });
  }
  get f() { return this.form.controls; }


  updateContact(companyBasicId: number, companyId: string) {
    this.isTableHidden = true;
    this.updatedContact = this.allContacts.filter((contact) => {
     return contact.companyBasicId === companyBasicId;
    });
    //Commenting api function call as the getContactById api is not working
    // this.authSerice.getContactById(companyId, companyBasicId)
    // .subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //     this.updatedContact = res;
    //     return res;
    //     //this.loading = false;
    //   },
    //   error: (e: any) => {
    //     //this.loading = false;
    //     console.error(e);
    //   } 
    // });
    this.form = this.formBuilder.group({
      companyBasicId: [this.updatedContact[0].companyBasicId],
      name: [this.updatedContact[0].name, Validators.required],
      emailId: [this.updatedContact[0].emailId, Validators.required],
      loginName: [this.updatedContact[0].loginName, Validators.required],
      password: [this.updatedContact[0].password, [Validators.required, Validators.minLength(6)],],
      mobile: [this.updatedContact[0].mobile, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  });
  this.form.controls['companyBasicId'].disable();
  }

  onUpdate() {
    this.submitted = true;
    this.isTableHidden = false;
    this.loading = true;
    console.log(this.form.value);
    // reset alert on submit
    this.error = '';

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    this.updateallContacts(this.form.value);

//Commenting api function call as the updateContacts api is not working

//   this.authSerice.create(allContacts)
// .subscribe({
//   next: (res: any) => {
//     console.log(res);
//     this.loading = false;
//   },
//   error: (e: any) => {
//     this.loading = false;
//     console.error(e);
//   } 

// });
}

updateallContacts(updateFormResponse: contactModel) {
  this.updatedContact[0].name = updateFormResponse.name;
  this.updatedContact[0].loginName = updateFormResponse.loginName;
  this.updatedContact[0].emailId = updateFormResponse.emailId;
  this.updatedContact[0].password = updateFormResponse.password;
  this.updatedContact[0].mobile = updateFormResponse.mobile;

  // this.authSerice.updateContact(this.updatedContact[0]).subscribe((res: any) => {
  //   console.log(res, "Update api");
  // });


  // this.allContacts.map((contact) => {
  //   if(contact.companyBasicId === updateFormResponse.companyBasicId) {
  //     contact = this.updatedContact[0];
  //   }
  // })
}

deleteContact(companyBasicId: number) {
  this.authSerice.deleteContactById(companyBasicId)
  .subscribe((res: any) => {
      console.log(res);
  });
  window.location.reload();
  // Static contact deletion
  // this.allContacts = this.allContacts.filter(contact => {
  //   return contact.companyBasicId !== companyBasicId;
  // })
}


}
