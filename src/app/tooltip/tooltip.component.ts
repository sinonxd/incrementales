import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  mostrarMenu: boolean = false;

  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }
}


