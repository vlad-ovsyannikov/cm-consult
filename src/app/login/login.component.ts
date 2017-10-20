import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email;
  password;
  rememberme;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
  ) {
    this.form = fb.group({
      email: fb.control(this.email, [Validators.required, Validators.email]),
      password: fb.control(this.password, [Validators.required]),
      rememberme: fb.control(this.rememberme)
    });
  }

  ngOnInit() {
    // if user is authed make redirect to overview page
  }

  submit() {
    if (this.form.status === 'VALID') {
      this.router.navigate(['/overview']);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
