import { Component, input, output } from '@angular/core';
import { CvModel } from '../../models/cv';

@Component({
  selector: 'app-item-cv',
  imports: [],
  templateUrl: './item-cv.html',
  styleUrl: './item-cv.css',
})
export class ItemCv {

  Cv = input.required<CvModel>();
  selectedCv = output<CvModel>();

  selectCv() {
    this.selectedCv.emit(this.Cv());
  }

}

  


