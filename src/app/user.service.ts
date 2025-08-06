import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class UserService {
  private users: { name: string; email: string }[] = [];

  getUsers() {
    return this.users;
  }

  addUser(user: { name: string; email: string }) {
    this.users.push(user);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

}