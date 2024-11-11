import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { WorkoutList } from '../workouts';
import { NgClass, NgFor, PercentPipe } from '@angular/common';

@Component({
        selector: 'pow-workouts-list',
        standalone: true,
        imports: [NgClass, PercentPipe, WorkoutsListComponent, NgFor],
        templateUrl: './workouts-list.component.html',
        styleUrls: ['./workouts-list.component.css'],
        changeDetection: ChangeDetectionStrategy.Default
})
export class WorkoutsListComponent implements OnInit, OnChanges {

        @Input() workouts: WorkoutList[] = [];
        //@Input() title: string = '';
        @Output() selectedWorkout = new EventEmitter<WorkoutList>();

        constructor() { }

        ngDoCheck(): void {
                console.log('on changes is calledddd')
        }

        ngOnChanges(changes: SimpleChanges): void {
                

        }

        ngOnInit(): void {
        }

        selectWorkout(workout: WorkoutList) {
                this.selectedWorkout.emit(workout);
        }
}