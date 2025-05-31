import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { WorkoutList } from '../workouts';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
        selector: 'pow-workouts-adding',
        standalone: true,
        imports: [AsyncPipe, FormsModule, JsonPipe],
        templateUrl: './workouts-adding.component.html',
        styleUrl: './workouts-adding.component.css'
})
export class WorkoutsAddingComponent implements OnInit {

        id: number = 0; //default
        // id$ : Observable<any>;

        workout: WorkoutList = {
                id: 0,
                title: "",
                startedOn: new Date("November 29, 2024 18:30:00"),
                completedOn: new Date("November 29, 2024 20:30:00"),
                workoutsDone: 0,
                location: ""
        }

        constructor(private workoutService: WorkoutsService, private router: ActivatedRoute) {

        }

        ngOnInit(): void {

        }

        successMessage: string = "";

        AddRoom() {
                this.workoutService
                .addWorkout(this.workout)
                .subscribe((data) => this.successMessage = "Workout added!");
        }

}
