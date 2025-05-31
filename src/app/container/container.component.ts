import { AfterContentInit, OnInit, Component, ContentChild, Host } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { WorkoutsService } from '../services/workouts.service';

@Component({
  selector: 'pow-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers: [WorkoutsService]
})
export class ContainerComponent implements OnInit, AfterContentInit{

        @ContentChild(PersonComponent) person!: PersonComponent;

        constructor(@Host() private workoutService: WorkoutsService){

        }
        ngOnInit(): void {
                
        }
        ngAfterContentInit(): void {
                console.log(this.person);
        }
        
        
        
}
