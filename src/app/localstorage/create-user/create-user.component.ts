import { LocalStorage } from './../LocalStorage';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/json/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
student:Student;
storage:LocalStorage;
  constructor(private router:Router) {
    this.storage = new LocalStorage();
    this.student = new Student();
   }

  ngOnInit() {
  }
  saveData(){
    debugger
    if(localStorage.getItem('students') != null){
      let data = localStorage.getItem('students');
      if(data != null){
        const students = JSON.parse(data);
        students.push(this.student);
        this.storage.Set("students", students)
      }
    }else{
      const students = [];
      students.push(this.student);
      this.storage.Set("students", students)
    }
    this.router.navigate(['/localstorage'])
  }
}
