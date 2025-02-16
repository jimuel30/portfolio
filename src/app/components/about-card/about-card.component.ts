import { Component } from '@angular/core';
import {CatBoxComponent} from "../cat-box/cat-box.component";

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [
    CatBoxComponent
  ],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {

}
