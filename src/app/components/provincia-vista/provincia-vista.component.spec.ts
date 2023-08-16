import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaVistaComponent } from './provincia-vista.component';

describe('ProvinciaVistaComponent', () => {
  let component: ProvinciaVistaComponent;
  let fixture: ComponentFixture<ProvinciaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
