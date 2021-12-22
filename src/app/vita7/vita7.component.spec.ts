import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita7Component } from './vita7.component';

describe('Vita7Component', () => {
  let component: Vita7Component;
  let fixture: ComponentFixture<Vita7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
