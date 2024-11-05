import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pow-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit{
        personName: string = "Furkan";

        constructor(){

        }
        ngOnInit(): void {
        }
}
