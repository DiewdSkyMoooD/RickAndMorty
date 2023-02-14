import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfoPersonComponent } from './components/info-person/info-person.component';
import { LocationPersonComponent } from './components/location-person/location-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { EpisodePersonComponent } from './components/episode-person/episode-person.component';
import { FavoritesPersonsComponent } from './components/favorites-persons/favorites-persons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersonComponent,
    LocationPersonComponent,
    EditPersonComponent,
    EpisodePersonComponent,
    FavoritesPersonsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
