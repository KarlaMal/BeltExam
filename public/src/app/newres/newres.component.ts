import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-newres',
  templateUrl: './newres.component.html',
  styleUrls: ['./newres.component.css']
})
export class NewresComponent implements OnInit {
  rest: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log(params['id'])
      this.rest= {name: '', cuisine: ''}
    });
  }

  createRes(){
    let observable = this._httpService.createRes(this.rest);
    observable.subscribe(data => {
      console.log('Created Restaurant', data);
      this.rest = data;
      this.goHome()
    })
  }

  goHome(){
    this._router.navigate(['/']); 
  }
}
