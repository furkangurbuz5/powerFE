import { Injectable } from '@angular/core';
import { WorkoutList } from '../workout/workouts';
import { environment } from "../../environments/environment";
import { AppServiceConfig } from '../AppConfig/appconfig.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay, BehaviorSubject } from 'rxjs';


@Injectable({
        providedIn: 'root'
})
export class WorkoutsService {

        workoutList: WorkoutList[] = []; 
        
        constructor(private http: HttpClient) {
                console.log("Workout service initialized");
        }
        
        getWorkouts() {
                return this.http.get<WorkoutList[]>(`${environment.apiEndpoint}/api/workouts`);
        }

        addWorkout(workout: WorkoutList){
                return this.http.post<WorkoutList[]>(`${environment.apiEndpoint}/api/workouts`, workout);
        }

        editWorkout(workout: WorkoutList){
                return this.http.put<WorkoutList[]>(`${environment.apiEndpoint}/api/workouts/${workout.id}`, workout);
        }

        deleteWorkout(id: number){
                return this.http.delete<WorkoutList[]>(`${environment.apiEndpoint}/api/workouts/${id}`)
        }

        getPhotos(){
                const request = new HttpRequest(
                        'GET', 
                        "https://jsonplaceholder.typicode.com/photos",
                        { reportProgress: true }
                );
                return this.http.request(request);
        }        
}
