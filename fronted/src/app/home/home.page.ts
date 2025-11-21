import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  title: string = 'Harry Potter';
  author: string = 'J.K. Rowling';

  constructor(private router: Router) {}

  gotoMyBooks() {
    this.router.navigate(['/my-books']);
  }

  gotoAddBook() {
    this.router.navigate(['/add-book']);
  }

  gotoConfig() {
    this.router.navigate(['/config']);
  }

}
