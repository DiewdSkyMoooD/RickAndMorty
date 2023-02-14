import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-person',
  templateUrl: './location-person.component.html',
  styleUrls: ['./location-person.component.scss']
})
export class LocationPersonComponent implements OnInit {
  @Input('location') locationForm!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
