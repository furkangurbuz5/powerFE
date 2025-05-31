export interface Workout {
        workoutId: number;
        name: string;
        startedOn: string;
        completedOn: string;
        workoutsDone: number;
        location: string;   
}

export interface WorkoutList {
        id?: number,
        title: string,
        startedOn: Date;
        completedOn: Date;
        workoutsDone: number;
        location: string;  
}