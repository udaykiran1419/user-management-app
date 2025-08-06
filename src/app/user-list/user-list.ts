import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
 get users() {
    return this.userService.getUsers();
  }
  constructor(private userService: UserService) {}

  delete(index: number) {
    this.userService.deleteUser(index);
  }
}
