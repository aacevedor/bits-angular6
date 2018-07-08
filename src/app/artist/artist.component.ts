import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './artist.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist:any;
  tracks:any;
  constructor(  private route: ActivatedRoute, private location: Location, private artistService:ArtistService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getArtist();
    this.getTracks();
  }

  private getArtist():void{

    this.artistService.getArtist(this.id).subscribe(
      response => this.artist = response,
      (err) => console.log(err),
      () => { console.log(this.artist)}
    );
  }

  private getTracks():void{
    this.artistService.getTracks(this.id).subscribe(
      response => this.tracks = response.tracks,
      (err) => console.log(err),
      () => { console.log(this.tracks)}
    );
  }

}
