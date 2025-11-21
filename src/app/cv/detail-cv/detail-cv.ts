import { Component, Input } from '@angular/core';
import { Cv } from '../cv/cv';
import { CvModel } from '../../models/cv';

@Component({
  selector: 'app-detail-cv',
  imports: [],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css',
})
export class DetailCv {


  @Input() Cv!:CvModel;
  

}
