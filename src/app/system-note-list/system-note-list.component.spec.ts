import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNoteListComponent } from './system-note-list.component';

describe('SystemNoteListComponent', () => {
  let component: SystemNoteListComponent;
  let fixture: ComponentFixture<SystemNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNoteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
