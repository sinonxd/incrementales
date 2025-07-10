import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TooltipComponent,
    FooterComponent,
    HomeComponent 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
