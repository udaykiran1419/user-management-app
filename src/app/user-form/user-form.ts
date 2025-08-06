import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  @Output() userAdded = new EventEmitter<any>();
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
submit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.userForm.reset();
    }
  }

}
