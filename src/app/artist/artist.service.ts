import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../globals';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  end_point_albums : string = '/v1/artists/{id}/albums';
  end_point_related_artists : string = '/v1/artists/{id}/related-artists';
  end_point_top_tracks : string = '/v1/artists/{id}/top-tracks?country=ES';
  end_point : string = '/v1/artists/{id}';

  constructor( private http: HttpClient, public globals:Globals) { }

  public getArtist(id:string):Observable<any>{
    const http_options = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + this.globals.authorization
        })
    };

    return this.http.get<any>(this.end_point.replace('{id}',id), http_options );
  }

  public getTracks(id:string):Observable<any>{
    const http_options = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + this.globals.authorization
        })
    };

    return this.http.get<any>(this.end_point_top_tracks.replace('{id}',id), http_options );
  }
}
