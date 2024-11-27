import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dummy-post',
  templateUrl: './dummy-post.component.html',
  styleUrls: ['./dummy-post.component.css']
})
export class DummyPostComponent implements OnInit {

  allPosts:any
  searchText = '';
  constructor(private apiService:PostService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.apiService.getPost().subscribe(data =>{
      console.log(data)
      this.allPosts = data;
    })
  }

}
