import { AfterContentInit, OnInit, Component, ContentChild } from '@angular/core';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'pow-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit, AfterContentInit{

        @ContentChild(PersonComponent) person!: PersonComponent;

        constructor(){

        }
        ngOnInit(): void {
                
        }
        ngAfterContentInit(): void {
                console.log(this.person);
        }
        
        
        
}
