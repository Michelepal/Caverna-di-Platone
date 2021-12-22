import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita3Component } from './vita3.component';

describe('Vita3Component', () => {
  let component: Vita3Component;
  let fixture: ComponentFixture<Vita3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
