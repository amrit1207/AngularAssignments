import { Component, OnInit } from '@angular/core';


//Interface Of User
interface User{
  name:string,
  username:string
  email:string
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //Users Data
  users:User[]=[
    {
      name: 'amrit jain',
      username: '@amrit',
      email: 'amrit@gmail.com'
    },
    {
      name: 'Virat Kohli',
      username: '@Virat',
      email: 'Virat@gmail.com'
    },
    {
      name: 'Narendra Modi',
      username: '@Narendra',
      email: 'Narendra@gmail.com'
    },
    {
      name: 'KL Rahul',
      username: '@Rahul',
      email: 'Rahul@gmail.com'
    },
    {
      name: 'Rohit Sharma',
      username: '@rohit',
      email: 'rohit@gmail.com'
    },
    {
      name: 'Varun Kohli',
      username: '@Varun',
      email: 'Varun@gmail.com'
    }
  ]

}
