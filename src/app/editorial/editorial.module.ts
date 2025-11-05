import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { BookRoutingModule } from '../book/book-routing.module';
import { RouterModule } from '@angular/router';
import { EditorialRoutingModule } from './editorial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    EditorialRoutingModule
  ],
  declarations: [EditorialListComponent]
})
export class EditorialModule { }