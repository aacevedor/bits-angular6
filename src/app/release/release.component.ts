import { Component, OnInit } from '@angular/core';
import { ReleaseService } from './release.service';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

import {Globals} from '../globals';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  albums : any;

  constructor( public releaseService: ReleaseService, public globals:Globals, public route:ActivatedRoute) { }

  ngOnInit() {

    this.getReleases();
  }


  private getReleases():void{
    this.releaseService.getReleases().subscribe(
      releases => this.albums = releases.albums,
      err => console.log(err),
      () => {
        console.log(this.albums)
       },
    );
  }

}
