import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddReaderDialogComponent } from './add-reader-dialog/add-reader-dialog.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,AddReaderDialogComponent ,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatSelectModule,CommonModule,MatCheckboxModule,MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

 
  title = 'ptest';
  displayedColumns: string[] = [ 'select', 'id', 'name'];
  dataSource = [
    { id: 1, name: ''},
    { id: 2, name: '',},
    { id: 3, name: ''},
    { id: 4, name: ''},
    { id: 5, name: ''},
    { id: 6, name: ''},
    { id: 7, name: ''},
    { id: 8, name: ''},
    { id: 9, name: ''},
    { id: 10, name: ''},
    { id: 11, name: ''},
    { id: 12, name: ''},
    { id: 13, name: ''} ,
    { id: 14, name: ''},
    { id: 15, name: ''},
    { id: 16, name: ''},
    { id: 17, name: ''},
    { id: 18, name: ''},
    { id: 19, name: ''},
    { id: 20, name: ''},
    { id: 21, name: ''},
    { id: 22, name: ''},
    { id: 23, name: ''},
    { id: 24, name: ''},
    { id: 25, name: ''},
    { id: 26, name: ''},
    { id: 27, name: ''},
    { id: 28, name: ''},
    { id: 29, name: ''},
    { id: 30, name: ''},

  ];



  selection = new SelectionModel<any>(true, []);
  nameOptions = ["Alice", "Bob", "Charlie","alma","leen"];

  onNameChange(row: any, value: string) {
    console.log(row, value);
  }
  row: any;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
   masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }
  
  constructor(public dialog: MatDialog) {}

  openAddReaderDialog() {
    const dialogRef = this.dialog.open(AddReaderDialogComponent, {
      width: '400px',
      data: {}
    });

}



}