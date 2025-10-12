import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyBooksPageRoutingModule } from './my-books-routing.module';
import { MyBooksPage } from './my-books.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyBooksPageRoutingModule
  ],
  declarations: [MyBooksPage]
})
export class MyBooksPageModule {}
