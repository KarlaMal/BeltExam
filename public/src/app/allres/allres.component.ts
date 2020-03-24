import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-allres',
  templateUrl: './allres.component.html',
  styleUrls: ['./allres.component.css']
})
export class AllresComponent implements OnInit {
  restaurants: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log(params['id'])
    });
    this.showRestaurants()
  }

  showRestaurants(){
    this._httpService.restaurants().subscribe(data => {
      console.log('All Authors', data);
      this.restaurants = data;
    })
  }

  Deleted(id){
    let observable = this._httpService.delete(id);
    observable.subscribe(data => {
      console.log('deleted it', data);
    })
    this.showRestaurants()
  }

  goHome(){
    this._router.navigate(['/']); 
  }
}
