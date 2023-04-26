import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user : User)
  {
    let Users = [];
    if(localStorage.getItem('users'))
    {
        const usersdata = localStorage.getItem('users');
        Users = usersdata !== null ? JSON.parse(usersdata) : null;
        debugger;
        //Users = [user, ...Users]; // spread operator is not workig
        //Users.push(user);  //push is not working
    }
    else
    {
        localStorage.setItem('users', JSON.stringify(user));
    }
  }
}
