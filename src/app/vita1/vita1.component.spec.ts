import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita1Component } from './vita1.component';

describe('Vita1Component', () => {
  let component: Vita1Component;
  let fixture: ComponentFixture<Vita1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
