import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  restaurant: any;
  rest_id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.rest_id = params['id']
      this.restaurant= {name: '', cuisine: ''}
      this.find(this.rest_id)
    });
  }

  find(id){
    let observable = this._httpService.oneRes(id);
    observable.subscribe(data => {
      console.log('found', data);
      this.restaurant = data;
    })
  }

  editAuthor(id){
    this.find(id)
    let observable = this._httpService.update(this.restaurant, id);
    observable.subscribe(data => {
      console.log(data)
      this.goHome()
    });
  }

  goHome(){
    this._router.navigate(['/']); 
  }

}
