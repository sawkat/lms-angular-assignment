import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Library } from '../library';
import { Router } from '@angular/router'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  library: Library[] = [];
  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit() {
    this.getLibraryList();
  }

  getLibraryList(): void {
    this.dataService.getLibraryList().subscribe(
      (library: Library[]) => {
        this.library = library;
        console.log(library)
      });
  }



  goToBookList(id : number) : void {
    this.router.navigateByUrl("/book-list/"+id);
  }

}
