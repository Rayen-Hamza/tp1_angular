import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.html',
  styleUrl: './comp1.css'
})
export class Comp1 {
  backgroundColor = 'white';

  onColorChange(color: HTMLInputElement) {
    this.backgroundColor = color.value;
    color.value=""

    
  }
  resetColor() {
    this.backgroundColor = 'white';
    
  }

}
