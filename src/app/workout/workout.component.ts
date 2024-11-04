import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutList } from './workouts';
import { NgClass, NgFor, NgIf, PercentPipe } from '@angular/common';


@Component({
        selector: 'pow-workout',
        standalone: true,
        imports: [NgIf, NgFor,NgClass, PercentPipe],
        templateUrl: './workout.component.html',
        styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

        workoutName = 'Barbell squat';
        appName = 'Power';

        currentGym = 'Sport City Houtrust';

        constructor() { }
        ngOnInit(): void {
        }

        workouts: Workout = {
                workoutId: 1,
                name: 'Barbell squat',
                upperBody: false,
                lowerBody: true,
                barbell: true
        }

        hideGym = false;

        toggle() {
                this.hideGym = !this.hideGym;
        }

        workoutList: WorkoutList[] = [{
                workoutId: 1,
                workoutName: 'Barbell squat',
                workoutType: 'Lower Body',
                recommendedSets: 5,
                recommendedReps: 5,
                recommendedRPE: .6
        },
        {
                workoutId: 2,
                workoutName: 'Deadlift',
                workoutType: 'Lower Body',
                recommendedSets: 5,
                recommendedReps: 5,
                recommendedRPE: .6
        },
        {
                workoutId: 3,
                workoutName: 'Overhead press',
                workoutType: 'Upper Body',
                recommendedSets: 4,
                recommendedReps: 10,
                recommendedRPE: .5
        },
        {
                workoutId: 4,
                workoutName: 'Barbell row',
                workoutType: 'Upper Body',
                recommendedSets: 5,
                recommendedReps: 10,
                recommendedRPE: .5
        },
        {
                workoutId: 5,
                workoutName: 'Romanian deadlifts',
                workoutType: 'Lower Body',
                recommendedSets: 5,
                recommendedReps: 10,
                recommendedRPE: .5
        }
        ]
}
