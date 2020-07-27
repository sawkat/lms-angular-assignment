import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Library } from './library'
import { Book } from './book'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  public getLibraryList(): Observable<Library[]> {
    return (this.http.get<Library[]>("http://localhost:8080/library/get"));
  }
  public getBookList(id: number): Observable<Book[]> {
    return (this.http.get<Book[]>("http://localhost:8080/book/getallbookbylibrary/" + id));
  }
}
