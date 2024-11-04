export interface Workout {
        workoutId: number;
        name: string;
        upperBody: boolean;
        lowerBody: boolean;
        barbell: boolean;
}

export interface WorkoutList {
        workoutId: number,
        workoutName: string,
        workoutType: string,
        recommendedSets: number,
        recommendedReps: number,
        recommendedRPE: number
}