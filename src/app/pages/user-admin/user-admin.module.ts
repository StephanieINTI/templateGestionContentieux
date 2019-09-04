import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { UserAdminComponent } from './user-admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserAdminComponent, SearchPipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [UserAdminComponent]
})
export class UserAdminModule { }
