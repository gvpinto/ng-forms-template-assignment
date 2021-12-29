import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  formSubmitted = false;

  signUp = {
    email: '',
    subscription: '',
    password: '',
  };

  ngOnInit(): void {
    this.defaultSubscription = this.subscriptions[1];
  }
  onSubmit(): void {
    console.log(this.signupForm);
    this.formSubmitted = true;
    this.signUp.email = this.signupForm.form.value.email;
    this.signUp.subscription = this.signupForm.form.value.subscription;
    this.signUp.password = this.signupForm.form.value.password;
  }
}
