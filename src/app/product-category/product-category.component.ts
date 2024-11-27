import { Component, OnInit } from '@angular/core';
import { DummyJsonApiService } from '../dummy-json-api.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
products:any = [];
allProducts:any = [];
favouriteProduct:any=[];
dataLoading=false;
searchText='';
checkedItems = []
  constructor(private dummyApi:DummyJsonApiService) { 
    
  }

  ngOnInit() {
    this.dummyApi.getProductCategory().subscribe(data =>{
      console.log(data)
      this.products = data
    })
    this.getAllProducts();
    this.favouriteProduct =JSON.parse(JSON.stringify(this.allProducts)) ;
    console.log(this.favouriteProduct,'fav')
  }

  getAllProducts(){
    this.dataLoading = true;
    this.dummyApi.getAllProduct().subscribe(data =>{
      this.allProducts = data.products;
      console.log(this.allProducts)
      this.favouriteProduct =JSON.parse(JSON.stringify(this.allProducts)) ;
      console.log(this.favouriteProduct,'fav')
      this.dataLoading = false
    })
  }

  searchProduct(){
    console.log(this.searchText)
    this.favouriteProduct = this.allProducts.filter(data =>{
      return data.title.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
  allApply(e){
    if(e.target.checked){
    
  }
  }
  filterProduct(e,category){
    // if(e.target.checked){
    //   console.log(category)
    //   let newProduct = this.allProducts.filter(item =>{
    //     return item.category.toLowerCase().includes(category)
    //   })
    //   console.log(newProduct)
    //   return this.favouriteProduct = [this.favouriteProduct,...newProduct]
    // }else if(e.target.unchecked){
    //   return this.favouriteProduct
    // }
   
    if(e.target.checked){
      this.checkedItems.push(category);
    }else{
      this.checkedItems = this.checkedItems.filter(item => item !== category)
    }
    if(this.checkedItems.length){
      this.favouriteProduct = this.allProducts.filter(item => this.checkedItems.includes(item.category))
    }else{
      this.favouriteProduct =JSON.parse(JSON.stringify(this.allProducts)) ;
    }
    console.log(this.checkedItems)
  }
}
