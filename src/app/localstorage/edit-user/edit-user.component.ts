import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from './../LocalStorage';
import { Student } from './../../json/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
student:Student;
existingStudent:any
storage:LocalStorage;
  constructor(private activeRoute:ActivatedRoute, private router:Router) {
    this.storage = new LocalStorage();
    this.student = new Student();
    console.log(this.student)
    this.activeRoute.params.subscribe(param =>{
      let id = param['id'];
      const students:Student[] = this.storage.Get("students");
       this.existingStudent = students.find(u => u.sId === id);
      console.log(this.existingStudent)
      if(this.existingStudent != undefined){
        this.storage = Object.create(this.existingStudent)
      }
    })
   }

  ngOnInit() {
  }
  saveData(){
    let students:Student[] = this.storage.Get("students")
    console.log(students)
    if(students != null){
      for (let i = 0; i < students.length; i++) {
        const element = students[i];
        if(element.sId === this.student.sId){
          students[i].name = this.student.name;
          students[i].city = this.student.city;
          break
        }
      }
      this.storage.Set("students",students);
    }
    this.router.navigate(['/localstorage'])
  }
}
