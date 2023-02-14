import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-person',
  templateUrl: './episode-person.component.html',
  styleUrls: ['./episode-person.component.scss']
})
export class EpisodePersonComponent implements OnInit {
  @Input('episode') episodeForm!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
