import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'people',
    loadChildren: './get-people/get-people.module#GetPeopleModule'
  },
  {
    path: 'person-details/:id',
    loadChildren: './person-details/person-details.module#PersonDetailsModule'
  },
  {
    path: 'add-person',
    loadChildren: './add-person/add-person.module#AddPersonModule'
  },
  {
    path: 'update-person/:id',
    loadChildren: './update-person/update-person.module#UpdatePersonModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
