import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpereComponent } from './opere.component';

describe('OpereComponent', () => {
  let component: OpereComponent;
  let fixture: ComponentFixture<OpereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
