import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { WorkoutList } from '../workouts';
import { NgClass, NgFor, PercentPipe } from '@angular/common';

@Component({
  selector: 'pow-workouts-list',
  standalone: true,
  imports: [NgClass, PercentPipe, WorkoutsListComponent, NgFor],
  templateUrl: './workouts-list.component.html',
  styleUrls: ['./workouts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutsListComponent implements OnInit, OnChanges {
        
        @Input() workouts: WorkoutList[] = [];
        @Input() title: string = '';
        @Output() selectedWorkout = new EventEmitter<WorkoutList>();

        constructor(){

        }
        ngOnChanges(changes: SimpleChanges): void {
                console.log(changes);
                // if(changes['title']){
                //         this.title = changes['title'].currentValue.toUpperCase();
                // }
        }

        ngOnInit(): void {
        }

        selectWorkout(workout: WorkoutList)
        {
                this.selectedWorkout.emit(workout);
        }
}