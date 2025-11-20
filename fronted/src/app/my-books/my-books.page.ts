import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
  standalone: false,
})
export class MyBooksPage implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.getAllBooks();
  }

  ionViewWillEnter() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBooks().subscribe((response) => {
      const books = Array.isArray(response) ? response : [];
      this.books = books;
      this.filteredBooks = [...books];
    });
  }

  filterBooks(event: Event) {
    const value = (event as CustomEvent).detail.value?.toLowerCase() || '';
    this.filteredBooks = this.books.filter((book) =>
      book.title?.toLowerCase().includes(value)
    );
  }

  editBook(id: number) {
    this.router.navigate(['/edit-book', id]);
  }

  deleteBook(id: number) {
    if (confirm('¿Estás seguro de eliminar este libro?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.getAllBooks();
      });
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
