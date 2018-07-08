import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  end_point : string = '/v1/browse/new-releases?country=CO&limit=10&offset=0';
  constructor( private http: HttpClient, public globals:Globals) { }

  public getReleases():Observable<any>{
    const http_options = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + this.globals.authorization
        })
    };
    return this.http.get<any>(this.end_point, http_options );
  }
}
