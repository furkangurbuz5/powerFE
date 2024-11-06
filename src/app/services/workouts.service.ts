import { Injectable } from '@angular/core';
import { WorkoutList } from '../workout/workouts';
import { environment } from "../../environments/environment";
import { AppServiceConfig } from '../AppConfig/appconfig.service';


@Injectable({
        providedIn: 'root'
})
export class WorkoutsService {

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
        }];

        constructor(private config: AppServiceConfig) {
                // console.log(environment.apiEndpoint);
                console.log(this.config.APP_CONFIG.apiEndpoint);
                console.log("Workout service initialized");
        }

        getWorkouts() {
                return this.workoutList;
        }
}
