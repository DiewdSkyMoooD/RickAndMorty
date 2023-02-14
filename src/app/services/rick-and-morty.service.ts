import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRepsonsePerson, IResponseEpisode, IResponseLocation } from '../models/rick-and-morty';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  getPerson(id: string | number): Observable<IRepsonsePerson> {
    return this.http.get<IRepsonsePerson>(`${this.apiUrl}/character/${id}`)
  }

  getLocation(id: string | number): Observable<IResponseLocation> {
    return this.http.get<IResponseLocation>(`${this.apiUrl}/location/${id}`)
  }

  getEpisode(id: string | number): Observable<IResponseEpisode> {
    return this.http.get<IResponseEpisode>(`${this.apiUrl}/episode/${id}`)
  }
}
