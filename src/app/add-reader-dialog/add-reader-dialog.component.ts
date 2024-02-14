import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-add-reader-dialog',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,MatCheckboxModule,MatDatepickerModule,MatInputModule],
  templateUrl: './add-reader-dialog.component.html',

})

export class AddReaderDialogComponent {
  name!: string;
  id!: string;
  active: boolean = false;
  selectedDate: Date | undefined;
  dialog: any;
  constructor(public dialogRef: MatDialogRef<AddReaderDialogComponent>) { }
  openAddReaderDialog() {
    this.dialogRef = this.dialog.open(AddReaderDialogComponent);
  }  
}
