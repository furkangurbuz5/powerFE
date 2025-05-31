import { Component, OnInit, Self } from '@angular/core';
import { WorkoutsService } from '../services/workouts.service';

@Component({
  selector: 'pow-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
  providers: [WorkoutsService]
})
export class PersonComponent implements OnInit{
        personName: string = "Furkan";

        constructor(){

        }
        ngOnInit(): void {
        }
}
