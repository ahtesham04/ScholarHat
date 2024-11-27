import { LocalStorage } from './../LocalStorage';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/json/student';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
students:Student[];
storage:LocalStorage;
searchText = '';
studentSearchData=[];
  constructor() { 
    this.storage = new LocalStorage();
    this.students = this.storage.Get('students');
    console.log(this.students)
  }

  ngOnInit() {
    this.studentSearchData = this.students
  }
  searchStudent(){
    // this.searchText = e.target.value
    console.log(this.searchText)
    this.studentSearchData = this.students.filter(item =>{
      return item.name.toLowerCase().includes(this.searchText.toLowerCase())
    }

    )
    // this.students.forEach(el =>{
    //   if(el.name.toLowerCase().includes(this.searchText)){
    //     this.students = this.students.filter(e => e.name.toLowerCase() === this.searchText)
    //     console.log(this.students)
    //   }
      
    // });
  }
  deleteStudent(id:number,name:string){
    if(confirm(`Do you want to delete student ${name}?`) && this.students){
      let index = this.students.findIndex(x => x.sId === id);
      if(index>-1){
        this.students.splice(index,1)
        this.storage.Set("students",this.students)
        alert(`The Student ${name} has been deleted successfully.`)
      }
    }
  }
}
