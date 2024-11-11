import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { PersonComponent } from './person/person.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routes: Routes = [
        {path: 'workout', component: WorkoutComponent},
        {path: 'person', component: PersonComponent},
        {path: '', redirectTo: '/workout', pathMatch: 'full'},
        {path: '**', component: NotfoundComponent}
];
