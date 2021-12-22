import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita6Component } from './vita6.component';

describe('Vita6Component', () => {
  let component: Vita6Component;
  let fixture: ComponentFixture<Vita6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vita6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vita6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
