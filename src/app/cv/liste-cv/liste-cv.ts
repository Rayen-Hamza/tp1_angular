import { Component, input, Output, EventEmitter} from '@angular/core';
import { ItemCv } from '../item-cv/item-cv';
import { CvModel } from '../../models/cv';

@Component({
  selector: 'app-liste-cv',
  imports: [ItemCv],
  templateUrl: './liste-cv.html',
  styleUrl: './liste-cv.css',
})
export class ListeCv {


Cvs=input.required<CvModel[]>();

@Output() selectedCv = new EventEmitter<CvModel>();

selectCv(cv: CvModel) {
   
    this.selectedCv.emit(cv);
  }

}
