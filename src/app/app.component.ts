import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutComponent } from "./workout/workout.component";

@Component({
  selector: 'pow-root',
  standalone: true,
  imports: [RouterOutlet, WorkoutComponent],
  templateUrl: './app.component.html',
//   template: `<h1>Hello World from inline template!</h1>
//   <p> Angular P tag multi line test</p>
//   `,
  styleUrl: './app.component.css',
  styles: [`h1 {color: blue}`]
})
export class AppComponent {
  title = 'powerFE';
}
