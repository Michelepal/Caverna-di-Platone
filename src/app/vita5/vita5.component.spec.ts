import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita5Component } from './vita5.component';

describe('Vita5Component', () => {
  let component: Vita5Component;
  let fixture: ComponentFixture<Vita5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
