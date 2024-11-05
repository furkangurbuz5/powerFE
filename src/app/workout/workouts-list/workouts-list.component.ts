import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkoutList } from '../workouts';
import { NgClass, NgFor, PercentPipe } from '@angular/common';

@Component({
  selector: 'pow-workouts-list',
  standalone: true,
  imports: [NgClass, PercentPipe, WorkoutsListComponent, NgFor],
  templateUrl: './workouts-list.component.html',
  styleUrl: './workouts-list.component.css'
})
export class WorkoutsListComponent implements OnInit {
        
        @Input() workouts: WorkoutList[] = [];

        @Output() workoutSelected = new EventEmitter<WorkoutList>();

        constructor(){

        }

        ngOnInit(): void {
            
        }
}
