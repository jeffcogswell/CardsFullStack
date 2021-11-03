import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  currentUser = null;
  loginEntry = '';

  constructor() {

  }

  loginUser() {
    this.currentUser = this.loginEntry;
  }

  logoutUser() {
    this.loginEntry = null;
    this.currentUser = null;
  }
}
