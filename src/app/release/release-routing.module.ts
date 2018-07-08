import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from '@app/core';

import { ReleaseComponent } from './release.component';

const routes: Routes = [
  Route.withShell([
    { path: 'releases', component: ReleaseComponent, data: { title: extract('Releases') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseRoutingModule { }
