import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

import { QuoteService } from './quote.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService, public globals: Globals, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    if(this.route.snapshot.fragment){
      this.globals.setAuthorizationToken(this.route.snapshot.fragment);
      this.router.navigate(['/releases'], { replaceUrl: true });
    }

    // this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; }
    // );
  }

  StartSessionOnSpotify():void{
    this.globals.startSessionOnSpotify();
  }

}
