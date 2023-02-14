import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, switchMap } from 'rxjs';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  allInfoForm = this.fb.group({
    person: this.fb.group({
      name: [''],
      status: [''],
      type: [''],
      species: [''],
      gender: ['']
    }),
    location: this.fb.group({
      name: [''],
      type: [''],
      dimension: [''],
      //residents: ['']
    }),
    episode: this.fb.group({
      name: [''],
      air_date: [''],
      episode: ['']
    })

  });

  constructor(
    private rickAndMortySvc: RickAndMortyService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.rickAndMortySvc.getPerson(this.getIdUrl()!)
      .pipe(
        switchMap(
          res => forkJoin(
            //Person
            this.rickAndMortySvc.getPerson(res.id),
            //get location of person
            this.rickAndMortySvc.getLocation(this.getIdOfString(res.location.url)),
            //get a random episode
            this.rickAndMortySvc.getEpisode(this.getIdOfString(res.episode[this.getRandomNumber(0, res.episode.length)]))
          )
        )).subscribe(([person, location, episode]) => this.allInfoForm.patchValue({ person, location, episode }))

  }

  //get the id of url
  getIdUrl() {
    return this.route.snapshot.paramMap.get('id')
  }

  //separate the url by '/' and take the id of urls on the end of url
  getIdOfString(url: string) {
    let urlFragments = url.split('/')
    return urlFragments[urlFragments.length - 1]
  }

  //get a random number between min and max number
  getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

  }

  save() {
    if (!localStorage.getItem('persons')) {
      let persons = [];
      persons.push(this.allInfoForm.value);
      localStorage.setItem('persons', JSON.stringify(persons))
      return
    }
    let persons = JSON.parse(localStorage.getItem('persons')!);
    persons.push(this.allInfoForm.value);
    localStorage.setItem('persons', JSON.stringify(persons));

  }

}
