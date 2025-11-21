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
    const prixTotal = this.prixTotalTTC();
    
    if (this.quantite >= 10 && this.quantite <= 15) {
      return prixTotal * 0.2; // 20% remise
    } else if (this.quantite > 15) {
      return prixTotal * 0.3; // 30% remise
    }
    
    return 0; // Pas de remise
  }
}
