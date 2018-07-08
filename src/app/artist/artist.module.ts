import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  declarations: [ArtistComponent]
})
export class ArtistModule { }
