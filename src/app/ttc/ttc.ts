import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ttc',
  imports: [FormsModule, CommonModule],
  templateUrl: './ttc.html',
  styleUrl: './ttc.css',
})
export class TTC {
  prixHT = signal<number>(0); 
  quantite = signal<number>(1);
  tva = signal<number>(18);

  prixUnitaireTTC = computed(() => {
    return this.prixHT() * (1 + this.tva() / 100);
  });

  prixTotalTTC = computed(() => {
    return this.prixUnitaireTTC() * this.quantite();
  });

  remise = computed(() => {
    const prixTotal = this.prixTotalTTC();
    
    if (this.quantite() >= 10 && this.quantite() <= 15) {
      return prixTotal * 0.2; 
    } else if (this.quantite() > 15) {
      return prixTotal * 0.3; 
    }
    
    return 0;
  });
}