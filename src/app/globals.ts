import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Globals {
  authorization: string = null;
  authentication_params = {
    'client_id' : environment.client_id,
    'response_type' : environment.response_type,
    'redirect_uri' : environment.redirect_uri,
    'scope' : environment.scope,
    'state' : environment.state,
  }



 constructor(){}

 public startSessionOnSpotify(){
     let url = 'https://accounts.spotify.com/authorize' + '?' + this.buildQuery(this.authentication_params);
     window.location.href=url;
}

 public buildQuery(params:object){
   let serialize = function(obj:object) {
     let str = [];
     for ( let p in obj) {
       if (obj.hasOwnProperty(p)) {
         str.push(p + '=' + obj[p]);
       }
     }
       return str.join('&');
   };
   return serialize(params)
 }

 public setAuthorizationToken(fragment:string):void{
   fragment.split('&').map((obj)=> {
     let values = obj.split('=');
     if(values[0] == 'access_token' ){
       console.log('Set Token', values[1]);
       this.authorization = values[1];
     }
    //  Object.defineProperty(this.authorization,values[0],{value : values[1],
    //                            writable : true,
    //                            enumerable : true,
    //                            configurable : true})
   });


 }

}
