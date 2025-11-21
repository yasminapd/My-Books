import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  private buildEndpoint(path: string = '') {
    const base = this.configService.apiBaseUrl;
    return `${base}/books${path}`;
  }

  getBooks() {
    return this.httpClient.get(this.buildEndpoint());
  }

  getBook(id: number) {
    return this.httpClient.get(this.buildEndpoint(`/${id}`));
  }

  createBook(book: any) {
    return this.httpClient.post(this.buildEndpoint(), book);
  }

  updateBook(id: number, book: any) {
    return this.httpClient.put(this.buildEndpoint(`/${id}`), book);
  }

  deleteBook(id: number) {
    return this.httpClient.delete(this.buildEndpoint(`/${id}`));
  }
}
