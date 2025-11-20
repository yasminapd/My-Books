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
  isConfirmOpen = false;
  bookToDelete: number | null = null;

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        this.isConfirmOpen = false;
        this.bookToDelete = null;
      },
    },
    {
      text: 'Eliminar',
      role: 'destructive',
      handler: () => this.confirmDelete(),
    },
  ];

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

  promptDelete(id: number) {
    this.bookToDelete = id;
    this.isConfirmOpen = true;
  }

  closeAlert() {
    this.isConfirmOpen = false;
    this.bookToDelete = null;
  }

  confirmDelete() {
    if (this.bookToDelete == null) {
      return false;
    }

    this.bookService.deleteBook(this.bookToDelete).subscribe(() => {
      this.getAllBooks();
      this.isConfirmOpen = false;
      this.bookToDelete = null;
    });

    return true;
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
