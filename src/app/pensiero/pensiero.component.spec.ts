import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensieroComponent } from './pensiero.component';

describe('PensieroComponent', () => {
  let component: PensieroComponent;
  let fixture: ComponentFixture<PensieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensieroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
