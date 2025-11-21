import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ttc',
  imports: [FormsModule, CommonModule],
  templateUrl: './ttc.html',
  styleUrl: './ttc.css',
})
export class TTC {
  prixHT = 0;
  quantite = 1;
  tva = 18;

   prixUnitaireTTC(): number {
    return this.prixHT * (1 + this.tva / 100);
  }

  prixTotalTTC(): number {
    return this.prixUnitaireTTC() * this.quantite;
  }

  remise(): number {
    return this.prixTotalTTC() * 0.1; 
  }
}
