import { Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutComponent } from "./workout/workout.component";
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { PersonComponent } from "./person/person.component";
import { LoggerService } from './services/logger.service';
import { localStorageToken } from './localstorage.token';
@Component({
        selector: 'pow-root',
        standalone: true,
        imports: [RouterOutlet, WorkoutComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, ContainerComponent, PersonComponent],
        templateUrl: './app.component.html',
        //   template: `<h1>Hello World from inline template!</h1>
        //   <p> Angular P tag multi line test</p>
        //   `,
        styleUrl: './app.component.css',
        styles: [`h1 {color: purple}`]
})
export class AppComponent implements OnInit {
        
        title = 'powerFE';
        role = 'admin';

        @ViewChild('apptitle', {static: true}) apptitle!: ElementRef;

        constructor(@Optional() private loggerService: LoggerService,
                @Inject(localStorageToken) private localStorage: any){
                
                
        }

        ngOnInit(): void {
                this.loggerService?.log('AppComponent.ngOnInit()');
                this.apptitle.nativeElement.innerText = "Powerlifting, Esq.";
                this.localStorage.setItem('name', 'Powerlifting, Esq.');
        }


        // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

        // ngAfterViewInit(): void {
        //         const componentRef = this.vcr.createComponent(WorkoutComponent);
        //         componentRef.instance.currentGym = 'Sport City Capelle a/d IJssel';
        // }

        

}
