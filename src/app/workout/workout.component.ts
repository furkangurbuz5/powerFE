import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren, } from '@angular/core';
import { Workout, WorkoutList } from './workouts';
import { JsonPipe, NgClass, NgFor, NgIf, PercentPipe } from '@angular/common';
import { WorkoutsListComponent } from './workouts-list/workouts-list.component';
import { HeaderComponent } from "../header/header.component";
import { WorkoutsService } from '../services/workouts.service';
import { Observable, Subscription } from 'rxjs';


@Component({
        selector: 'pow-workout',
        standalone: true,
        imports: [NgIf, NgFor, NgClass, PercentPipe, WorkoutsListComponent, JsonPipe, HeaderComponent],
        templateUrl: './workout.component.html',
        styleUrls: ['./workout.component.css'],
        changeDetection: ChangeDetectionStrategy.Default
})
export class WorkoutComponent implements OnInit, DoCheck, AfterViewInit, OnChanges {

        appName = 'Power';
        currentGym = 'Sport City Houtrust';
        hideGym = true;

        selectedWorkout!: WorkoutList;
        title = 'Workout List';
        workoutList: WorkoutList[] = [];

        stream = new Observable<string>(observer => { //whenever new value is pushed, observer will observe the new value. 
                observer.next('user1');
                observer.next('user2');
                observer.next('user3');
                observer.complete();
                // observer.error('error');
        });

        subscription !: Subscription;

        @ViewChild(HeaderComponent, { static: false }) headerComponent!: HeaderComponent;
        @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

        //dependency injection: workout service
        constructor(private workoutService: WorkoutsService) { }

        ngAfterViewInit(): void {
                this.headerComponent.title = "Powerlifting, Esq.";
        }

        ngDoCheck(): void {
                console.log('on changes is called')
        }

        ngOnInit(): void {
                this.stream.subscribe({
                        next: (value) => console.log(value),
                        complete: () => console.log('complete'),
                        error: (err) => console.log(err),
                });
                this.stream.subscribe((data) => console.log(data));

                //using the api to get workouts and add to list
                this.workoutService.getWorkouts().subscribe((workouts) => {
                        console.log("Fetched workouts: ", workouts);
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

        editWorkout(){
                const workout: WorkoutList = {
                        id: 1,
                        title: 'Overhead press',
                        startedOn: new Date("November 29, 2024 18:30:00"),
                        completedOn: new Date("November 29, 2024, 19:30:00"),
                        workoutsDone: 1,
                        location: 'Sport City Houtrust'
                };

                this.workoutService.editWorkout(workout).subscribe((data) => {
                        this.workoutList = data;
                });
        }

        addWorkout() {
                const workout: WorkoutList = {
                        id: 6,
                        title: 'Barbell squat',
                        startedOn: new Date("November 29, 2024 18:30:00"),
                        completedOn: new Date("November 29, 2024, 19:30:00"),
                        workoutsDone: 1,
                        location: 'Sport City Houtrust'
                };
                this.workoutService.addWorkout(workout).subscribe((data) => {
                        this.workoutList = data;
                });
        }

        deleteWorkout(){
                this.workoutService.deleteWorkout(6).subscribe((data) => {
                });
        }

        ngOnChanges(changes: SimpleChanges): void {
                console.log(changes);
        }

}
