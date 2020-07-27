import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book[] = [];

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.dataService.getBookList(routeParams.id).subscribe(
        (book: Book[]) => {
          this.book = book;
          console.log(book)
        });
    });

  }


  goToLibraryPage() : void {
    this.router.navigateByUrl("/library");
  }
}
