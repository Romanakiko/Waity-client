import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  multiplier = 0;
  showDescription = false;

  constructor() { }

  ngOnInit(): void {
  }

  multiplierAdd(offset: number): void {
    this.multiplier = (this.multiplier + offset) > 0 ? (this.multiplier + offset): 0;
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }
}
