import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoMapComponent } from './resto-map.component';

describe('RestoMapComponent', () => {
  let component: RestoMapComponent;
  let fixture: ComponentFixture<RestoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
