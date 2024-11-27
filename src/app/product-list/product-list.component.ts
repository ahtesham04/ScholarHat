import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DummyJsonApiService } from '../dummy-json-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList:any = [];
  constructor(private activeRoute:ActivatedRoute, private dummyApi:DummyJsonApiService) {
    this.activeRoute.params.subscribe(param=>{
      console.log(param.productCategory)
      this.dummyApi.getProductList(param.productCategory).subscribe(data =>{
        console.log(data,'pc')
        this.productList = data.products
      })

    })
   }

  ngOnInit() {
  }

}
