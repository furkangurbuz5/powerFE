import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsAddingComponent } from './workouts-adding.component';

describe('WorkoutsAddingComponent', () => {
  let component: WorkoutsAddingComponent;
  let fixture: ComponentFixture<WorkoutsAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutsAddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutsAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
