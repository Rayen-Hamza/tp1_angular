import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
  exportAs: 'comp1'
})
export class Comp1 {
  backgroundColor = 'white';

  onColorChange(color: string) {
    this.backgroundColor = color;
    
  }
  resetColor() {
    this.backgroundColor = 'white';
    
  }


}
