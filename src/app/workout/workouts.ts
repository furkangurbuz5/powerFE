export interface Workout {
        workoutId: number;
        name: string;
        startedOn: string;
        completedOn: string;
        workoutsDone: number;
        location: string;   
}

export interface WorkoutList {
        workoutId: number,
        workoutName: string,
        startedOn: Date;
        completedOn: Date;
        workoutsDone: number;
        location: string;  
}