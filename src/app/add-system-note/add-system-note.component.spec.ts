import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemNoteComponent } from './add-system-note.component';

describe('AddSystemNoteComponent', () => {
  let component: AddSystemNoteComponent;
  let fixture: ComponentFixture<AddSystemNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSystemNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
