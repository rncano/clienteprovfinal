import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaHomeComponent } from './provincia-home.component';

describe('ProvinciaHomeComponent', () => {
  let component: ProvinciaHomeComponent;
  let fixture: ComponentFixture<ProvinciaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
