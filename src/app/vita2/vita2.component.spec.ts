import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita2Component } from './vita2.component';

describe('Vita2Component', () => {
  let component: Vita2Component;
  let fixture: ComponentFixture<Vita2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
