import { Component, OnInit } from '@angular/core';
import { CvModel } from '../../models/cv';
import { ListeCv } from '../liste-cv/liste-cv';
import { DetailCv } from '../detail-cv/detail-cv'; 
import { ItemCv } from '../item-cv/item-cv';



@Component({
  selector: 'app-cv',
  imports: [ListeCv, DetailCv],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv implements OnInit {

  Cvs: CvModel[] = [];

  selectedCv!: CvModel;

  selectCv(cv: CvModel) {
    this.selectedCv = cv;
    
  }

  ngOnInit(): void {
    this.Cvs = [
      new CvModel(1, 'Rayen', 'Hamza', 30, 12345678, 'Developer', '/images/rotating_card_profile2.png'),
      new CvModel(2, 'Hamza ', 'Badreddine', 28, 87654321, 'AI Engineer', '/images/rotating_card_profile.png'),
      new CvModel(3, 'Youssef', 'Charfeddine', 35, 11223344, 'Cybersecurity Specialist', '/images/rotating_card_profile1.png'),
      new CvModel(4, 'Youssef', 'Hamdani', 27, 44332211, 'SOC Analyst', '/images/rotating_card_profile2.png'),
    ];
   
    this.selectedCv = this.Cvs[0];
  }

}
