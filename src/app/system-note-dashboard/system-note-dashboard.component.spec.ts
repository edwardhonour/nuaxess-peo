import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNoteDashboardComponent } from './system-note-dashboard.component';

describe('SystemNoteDashboardComponent', () => {
  let component: SystemNoteDashboardComponent;
  let fixture: ComponentFixture<SystemNoteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNoteDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNoteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
