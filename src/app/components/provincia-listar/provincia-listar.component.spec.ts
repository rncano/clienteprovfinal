import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaListarComponent } from './provincia-listar.component';

describe('ProvinciaListarComponent', () => {
  let component: ProvinciaListarComponent;
  let fixture: ComponentFixture<ProvinciaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
