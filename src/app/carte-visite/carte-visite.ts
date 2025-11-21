import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Personne } from '../models/personne';

@Component({
  selector: 'app-carte-visite',
  imports: [FormsModule],
  templateUrl: './carte-visite.html',
  styleUrl: './carte-visite.css',
})
export class CarteVisite {
  personne: Personne;

  constructor() {
    this.personne = new Personne(
      'Rayen Hamza',
      'Developer',
      'The hardest choices require the strongest wills.',
      'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...',
      235,
      114,
      35,
      "",
      "",
      "",
      "/images/rotating_card_profile.png"
    );
  }

}
