import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { dummyContact, contactModel } from '../contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;
  constructor(
    private formBuilder: FormBuilder,
    private authSerice: AuthService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      loginName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // reset alert on submit
    this.error = '';

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.updateDummyContact(this.form.value);
    this.authSerice.create(dummyContact).subscribe({
      next: (res: any) => {
        this.loading = false;
      },
      error: (e: any) => {
        this.loading = false;
        console.error(e);
      },
    });
  }

  //For adding contacts statically
  updateDummyContact(newContact: contactModel) {
    dummyContact.name = newContact.name;
    dummyContact.loginName = newContact.loginName;
    dummyContact.emailId = newContact.emailId;
    dummyContact.password = newContact.password;
    dummyContact.mobile = newContact.mobile;
    dummyContact.stores = [
      {
        Text: '08 ecommerce store 9721',
      },
      {
        Text: '08 ecommerce store 9721',
      },
    ];
  }
}
