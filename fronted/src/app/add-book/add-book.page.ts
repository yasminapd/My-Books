import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
  standalone: false
})
export class AddBookPage implements OnInit {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe(() => {
        console.log('Libro creado exitosamente');
        this.router.navigate(['/my-books']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/my-books']);
  }

}
