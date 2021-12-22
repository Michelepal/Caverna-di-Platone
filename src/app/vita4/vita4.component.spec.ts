import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita4Component } from './vita4.component';

describe('Vita4Component', () => {
  let component: Vita4Component;
  let fixture: ComponentFixture<Vita4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
