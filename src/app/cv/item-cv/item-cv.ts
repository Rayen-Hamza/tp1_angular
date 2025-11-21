import { Component, EventEmitter, input , Input, OnInit, Output} from '@angular/core';
import { CvModel } from '../../models/cv';

@Component({
  selector: 'app-item-cv',
  imports: [],
  templateUrl: './item-cv.html',
  styleUrl: './item-cv.css',
})
export class ItemCv  {


  //Cv = input.required<CvModel>();
  @Input() Cv!: CvModel;

  @Output() selectedCv = new EventEmitter();


  selectCv() {
    this.selectedCv.emit(this.Cv);
  }

}

  


