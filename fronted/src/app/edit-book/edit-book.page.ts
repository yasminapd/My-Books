import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
  standalone: false
})
export class EditBookPage implements OnInit {

  bookForm: FormGroup;
  bookId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    // Obtener el ID del libro desde la URL
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBook();
  }

  loadBook() {
    this.bookService.getBook(this.bookId).subscribe((book: any) => {
      this.bookForm.patchValue({
        title: book.title,
        author: book.author
      });
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.updateBook(this.bookId, this.bookForm.value).subscribe(() => {
        console.log('Libro actualizado exitosamente');
        this.router.navigate(['/my-books']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/my-books']);
  }

}
