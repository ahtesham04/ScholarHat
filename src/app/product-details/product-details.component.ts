import { DummyJsonApiService } from './../dummy-json-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 id:any
products:any 
product:any
  constructor(private activeRoute:ActivatedRoute, private dummyApi:DummyJsonApiService) { 
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    const url = this.activeRoute.snapshot.data

    console.log(this.id, url)
    this.activeRoute.params.subscribe(param =>{
      console.log(param)
      this.dummyApi.getProduct(param.id).subscribe(data=>{
            this.product = data
            console.log(this.product)
          })

    })
  }

  ngOnInit() {
    // debugger
    //  this.id = this.activeRoute.snapshot.paramMap.get('id')
    // console.log(this.id)
    // // this.getProducts()
    //     // this.activeRoute.params.subscribe(param =>{
    //       // this.getProducts()
    //   // console.log(param)
    //   // this.id = param.id
    //   this.dummyApi.getProduct(this.id).subscribe(data=>{
    //     this.product = data
    //     console.log(this.product)
    //   })
          // })
     
      
      console.log(this.product,'2')

    
  }
 getProducts(){
  debugger
  this.dummyApi.getAllProduct().subscribe(data =>{
    this.products = data.products
    console.log(this.products)
  })

 }

}
