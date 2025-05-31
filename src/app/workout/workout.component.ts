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
                //using the api to get workouts and add to list
                this.workoutService.getWorkouts().subscribe(workouts => {
                        this.workoutList = workouts;
                });

                
                
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
                        workoutId: 50,
                        workoutName: 'Bench press',
                        startedOn: new Date("November 29, 2024 18:30:00"),
                        completedOn: new Date("November 29, 2024, 19:30:00"),
                        workoutsDone: 1,
                        location: 'Sport City Houtrust'
                };
                this.workoutList = [...this.workoutList, workout];
        }





}
