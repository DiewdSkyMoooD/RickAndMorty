import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { FavoritesPersonsComponent } from './components/favorites-persons/favorites-persons.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'saved',
    pathMatch: 'full'
  },
  {
    //edit info or perdson 
    path: 'edit/:id',
    component: EditPersonComponent
  },
  {
    //prefer call saved persons
    path: 'saved',
    component: FavoritesPersonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
