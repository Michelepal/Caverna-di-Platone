import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreapostComponent } from './creapost.component';

describe('CreapostComponent', () => {
  let component: CreapostComponent;
  let fixture: ComponentFixture<CreapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreapostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
