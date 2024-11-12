import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'pow-workouts-adding',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './workouts-adding.component.html',
  styleUrl: './workouts-adding.component.css'
})
export class WorkoutsAddingComponent implements OnInit{

        id: number = 0; //default
        id$ : Observable<number>;

        constructor(private router: ActivatedRoute){
                this.id$ = this.router.params.pipe(
                        map(params => params['id'])
                );
        }

        ngOnInit(): void{
                //this.id = this.router.snapshot.params['id']; //this will never receive a new value
                this.id$ = this.router.params.pipe(
                        map(params => params['id'])
                );

                //this.router.params.subscribe((params) => { this.id = params['id']; });
        }

}
