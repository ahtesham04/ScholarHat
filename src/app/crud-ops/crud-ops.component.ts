import { Component, OnInit } from '@angular/core';
import { User } from '../json/user';

@Component({
  selector: 'app-crud-ops',
  templateUrl: './crud-ops.component.html',
  styleUrls: ['./crud-ops.component.css']
})
export class CrudOpsComponent implements OnInit {
user:User;
users:any;
newUser:any
// isEdit = false;
  constructor() {
    this.user = new User();
    this.users =[
      {userId:101, name:"Ahtesham",mobileNo:9009694164, city:"Ratlam"},
      {userId:102, name:"Ahmed",mobileNo:9009672365, city:"Indore"},
      {userId:103, name:"Ansari",mobileNo:8989694164, city:"Bhopal"}
    ]
    this.newUser = JSON.parse(JSON.stringify(this.users))
   }

  ngOnInit() {
  }
  rowIndex:any
  myFunction(x){
    this.rowIndex = x.rowIndex
    console.log(this.rowIndex)
  }

  onIdField(e,data,x){
    const index = x.rowIndex
    console.log(index)
    // this.newUser[index].userId = e.target.value
  }

  addNewUser(){
    this.user = new User();
    console.log(this.user)
    this.users.unshift(this.user)
    this.users[0].newUser = true
  }

  addUser(data){
    if(Object.keys(this.user).length === 0){
      alert('Please fill mendatory field')
    }else{
      // this.users.unshift(this.user)
      alert(`${this.user.name} added successfully`)
      data.newUser = false
      // this.user = new User();
    }
  }

  editUser(data:any){
    const existingUser = this.users.find(e => e.userId === data.userId);
    if(existingUser != undefined){
      this.user = Object.create(existingUser);
      data.isEdit = true;
    }
  }

  updateUser(data){
    console.log(data)
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if(element.userId === this.user.userId){
        this.users[i].name = this.user.name;
        this.users[i].mobileNo = this.user.mobileNo;
        this.users[i].city = this.user.city;
        data.isEdit = false;
        break;
      }
    }
  }
}
