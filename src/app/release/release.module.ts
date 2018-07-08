import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseRoutingModule } from './release-routing.module';
import { ReleaseComponent } from './release.component';

@NgModule({
  imports: [
    CommonModule,
    ReleaseRoutingModule
  ],
  declarations: [ReleaseComponent]
})
export class ReleaseModule { }
 
