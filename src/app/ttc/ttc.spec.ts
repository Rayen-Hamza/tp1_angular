import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTC } from './ttc';

describe('TTC', () => {
  let component: TTC;
  let fixture: ComponentFixture<TTC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
