import { Injectable } from '@angular/core';
import { WorkoutList } from '../workout/workouts';
import { environment } from "../../environments/environment";
import { AppServiceConfig } from '../AppConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
        providedIn: 'root'
})
export class WorkoutsService {

        workoutList: WorkoutList[] = [

        ];

        constructor(private config: AppServiceConfig, private http: HttpClient) {
                
                console.log("Workout service initialized");
        }

        getWorkouts() {
                return this.http.get<WorkoutList[]>(`${environment.apiEndpoint}/api/workouts`);
        }
}
