import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.scss',
})
export class HeroCardComponent {} // <--- IMPORTANTE: Añade 'Component' al final