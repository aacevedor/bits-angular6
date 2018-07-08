import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  authorization: string = null;
  authentication_params = {
    'client_id' : '366426de773243b6b429568267c85c3c',
    'response_type' : 'token',
    'redirect_uri' : 'http%3A%2F%2Flocalhost:4200%2Fhome',
    'scope' : 'user-read-private%20user-read-email',
    'state' : '123',
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
