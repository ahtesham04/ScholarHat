import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyJsonApiService } from '../dummy-json-api.service';

@Component({
  selector: 'app-nested-route',
  templateUrl: './nested-route.component.html',
  styleUrls: ['./nested-route.component.css']
})
export class NestedRouteComponent implements OnInit {
products:any = []
  constructor(private dummyApi:DummyJsonApiService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.dummyApi.getAllProduct().subscribe(data =>{
      this.products = data.products;
      console.log(this.products)
    })
  }

}
