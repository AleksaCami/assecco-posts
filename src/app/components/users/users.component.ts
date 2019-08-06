import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public allUsers = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe(results => {
      if (!results) {
        return;
      }
      this.allUsers = results;
      console.log(this.allUsers);
    });
  }

}
