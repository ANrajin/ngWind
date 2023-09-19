import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class SettingsModule { }
