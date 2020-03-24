import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  chosen: any;
  restaurant:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.find(params['id'])
      this.restaurant = {name: '', cuisine: ''};
      this.chosen = {customer: '', stars: '', description: ''};
    });

  }

  find(id){
    let observable = this._httpService.oneRes(id);
    observable.subscribe(data => {
      console.log('found', data);
      this.restaurant = data;
    })
  }

  makeReview(){
    let observable = this._httpService.review(this.chosen, this.restaurant._id);
    observable.subscribe(data => {
      console.log('made review', data);
      this.chosen = data;
      this.goHome()
    })
  }

  goHome(){
    this._router.navigate(['/reviews', this.restaurant._id]); 
  }

}
