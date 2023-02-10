import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, map } from 'rxjs';

export interface Book {
  id?: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('./assets/books.json').pipe(
      map((books: Book[]) => {
        return books.map((book: Book, index: number) => {
          return { ...book, id: index, price: this.getRandomPrice() };
        });
      })
    );
  }

  private getRandomPrice() {
    return Math.floor(Math.random() * (20 - 5 + 1) + 5);
  }
}
