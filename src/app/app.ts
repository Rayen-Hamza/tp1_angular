import { Component, signal } from '@angular/core';

import { Cv } from './cv/cv/cv';
import { Comp1 } from './comp1/comp1';
import { CarteVisite } from './carte-visite/carte-visite';
import { TTC } from './ttc/ttc';
@Component({
  selector: 'app-root',
  imports: [ Cv,Comp1, CarteVisite, TTC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp1');
}
