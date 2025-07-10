import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  mostrarMenu = false;
  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }
}


