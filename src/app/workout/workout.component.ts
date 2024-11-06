import { AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren, } from '@angular/core';
import { Workout, WorkoutList } from './workouts';
import { JsonPipe, NgClass, NgFor, NgIf, PercentPipe } from '@angular/common';
import { WorkoutsListComponent } from './workouts-list/workouts-list.component';
import { HeaderComponent } from "../header/header.component";
import { WorkoutsService } from '../services/workouts.service';


@Component({
        selector: 'pow-workout',
        standalone: true,
        imports: [NgIf, NgFor, NgClass, PercentPipe, WorkoutsListComponent, JsonPipe, HeaderComponent],
        templateUrl: './workout.component.html',
        styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit, DoCheck, AfterViewInit {

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
        title = 'Workout List';
        workoutList: WorkoutList[] = [];


        @ViewChild(HeaderComponent, { static: false }) headerComponent!: HeaderComponent;
        @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

        // workoutService = new WorkoutsService();

        //dependency injection: workout service
        constructor(@SkipSelf() private workoutService: WorkoutsService) { }

        ngAfterViewInit(): void {
                this.headerComponent.title = "Powerlifting, Esq.";
        }

        ngDoCheck(): void {
                console.log('on changes is called')
        }

        ngOnInit(): void {
                //using the dependency injection to get workouts and add to list
                this.workoutList = this.workoutService.getWorkouts();
        }

        toggle() {
                this.hideGym = !this.hideGym;
                this.title = "Workouts List";
        }

        selectWorkout(workout: WorkoutList) {
                this.selectedWorkout = workout;
        }

        addWorkout() {
                const workout: WorkoutList = {
                        workoutId: 6,
                        workoutName: 'Bench press',
                        workoutType: 'Upper Body',
                        recommendedSets: 4,
                        recommendedReps: 8,
                        recommendedRPE: .6
                };
                this.workoutList = [...this.workoutList, workout];
        }





}
