import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book-service';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
  standalone: false
})
export class MyBooksPage implements OnInit {

  books: any = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que se entra a esta página
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
    });
  }

  editBook(id: number) {
    this.router.navigate(['/edit-book', id]);
  }

  deleteBook(id: number) {
    if (confirm('¿Estás seguro de eliminar este libro?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.getAllBooks(); // Recargar lista
      });
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
