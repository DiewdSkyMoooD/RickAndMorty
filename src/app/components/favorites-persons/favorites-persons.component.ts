import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-favorites-persons',
  templateUrl: './favorites-persons.component.html',
  styleUrls: ['./favorites-persons.component.scss']
})
export class FavoritesPersonsComponent implements OnInit {


  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['Person Name', 'Status', 'Location', 'Dimension Location', 'Random Episode'];

  constructor() {
    if (localStorage.getItem('persons')) {
      this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('persons')!));
      return
    }
    this.dataSource = new MatTableDataSource()
  }


  ngOnInit(): void {

  }

}
