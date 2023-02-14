import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.scss']
})
export class InfoPersonComponent implements OnInit {
  @Input('person') personForm!: any;


  constructor() { }


  ngOnInit(): void {
  }
}
