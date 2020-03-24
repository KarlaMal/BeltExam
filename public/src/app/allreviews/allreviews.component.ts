import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-allreviews',
  templateUrl: './allreviews.component.html',
  styleUrls: ['./allreviews.component.css']
})
export class AllreviewsComponent implements OnInit {
  rest: any;
  reviews: any;
  rest_id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.rest_id = (params['id'])
    });
    this.find(this.rest_id);
  }

  find(id){
    let observable = this._httpService.oneRes(id);
    observable.subscribe(data => {
      console.log('found', data);
      this.rest = data;
    })
  }


  goHome(){
    this._router.navigate(['/']); 
  }

}
