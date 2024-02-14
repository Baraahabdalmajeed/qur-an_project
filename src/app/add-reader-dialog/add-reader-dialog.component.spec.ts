import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReaderDialogComponent } from './add-reader-dialog.component';

describe('AddReaderDialogComponent', () => {
  let component: AddReaderDialogComponent;
  let fixture: ComponentFixture<AddReaderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReaderDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReaderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
