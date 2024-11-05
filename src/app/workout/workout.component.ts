import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutList } from './workouts';
import { JsonPipe, NgClass, NgFor, NgIf, PercentPipe } from '@angular/common';
import { WorkoutsListComponent } from './workouts-list/workouts-list.component';


@Component({
        selector: 'pow-workout',
        standalone: true,
        imports: [NgIf, NgFor, NgClass, PercentPipe, WorkoutsListComponent, JsonPipe],
        templateUrl: './workout.component.html',
        styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

        appName = 'Power';
        currentGym = 'Sport City Houtrust';
        hideGym = false;
        workouts: Workout = {
                workoutId: 1,
                name: 'Barbell squat',
                upperBody: false,
                lowerBody: true,
                barbell: true
        }
        selectedWorkout!: WorkoutList;

        constructor() { }

        workoutList: WorkoutList[] = [];

        ngOnInit(): void {
                this.workoutList = [{
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
                }];
        }

        toggle() {
                this.hideGym = !this.hideGym;
        }

        selectWorkout(workout: WorkoutList)
        {
                this.selectedWorkout = workout;
        }

        

}
