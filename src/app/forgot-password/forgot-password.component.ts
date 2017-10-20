import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  email;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
  ) {
    this.form = fb.group({
      email: fb.control(this.email, [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.status === 'VALID') {
      this.router.navigate(['/login']);
    } else {
      this.form.controls['email'].markAsTouched({ onlySelf: true });
    }
  }
}
