import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { App } from './app';
import { UserList } from './user-list/user-list'
import { UserForm } from './user-form/user-form';
import { UserService } from './user.service';

@NgModule({
  declarations: [App, UserList, UserForm],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [App]
})
export class AppModule {}
