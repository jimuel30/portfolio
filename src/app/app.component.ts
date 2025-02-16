import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutCardComponent} from "./components/about-card/about-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
