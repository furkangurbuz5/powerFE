import { Routes } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { PersonComponent } from './person/person.component';

export const routes: Routes = [
        {path: 'workout', component: WorkoutComponent},
        {path: 'person', component: PersonComponent}

];
