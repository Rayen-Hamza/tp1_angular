import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisite } from './carte-visite';

describe('CarteVisite', () => {
  let component: CarteVisite;
  let fixture: ComponentFixture<CarteVisite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteVisite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteVisite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
