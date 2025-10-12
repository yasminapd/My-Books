import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  endpoint: string = 'http://localhost:8080/api/books';
  constructor (private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.endpoint);
  }

  getBook(id: number) {
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }

  createBook(book: any) {
    return this.httpClient.post(this.endpoint, book);
  }

  updateBook(id: number, book: any) {
    return this.httpClient.put(`${this.endpoint}/${id}`, book);
  }

  deleteBook(id: number) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
