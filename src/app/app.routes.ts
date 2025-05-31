import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { PersonComponent } from './person/person.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WorkoutsAddingComponent } from './workout/workouts-adding/workouts-adding.component';


export const routes: Routes = [
        {path: 'workout', component: WorkoutComponent},
        {path: 'workout/:id', component: WorkoutsAddingComponent},
        {path: 'workout/add', component: WorkoutsAddingComponent},
        {path: 'person', component: PersonComponent},
        {path: '', redirectTo: '/workout', pathMatch: 'full'},
        {path: '**', component: NotfoundComponent}
];
