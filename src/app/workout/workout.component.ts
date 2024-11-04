import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pow-workout',
  standalone: true,
  imports: [],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent implements OnInit{

        workoutName = 'Barbell Squat';
        appName = 'Power';

        currentGym = 'Sport City Houtrust';

        constructor() {}
        ngOnInit(): void {
        }

        hideGym = false;

        toggle()
        {
                this.hideGym = !this.hideGym;
        }
}
