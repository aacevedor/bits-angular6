import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from '@app/core';

import { ArtistComponent } from './artist.component';

const routes: Routes = [
  Route.withShell([
    { path: 'artist/:id', component: ArtistComponent, data: { title: extract('Artist') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
