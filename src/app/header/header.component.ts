import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pow-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
        
        title: string = '';
        
        constructor() { }

        ngOnInit(): void {
            
        }

}
