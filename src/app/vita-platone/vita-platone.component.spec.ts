import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaPlatoneComponent } from './vita-platone.component';

describe('VitaPlatoneComponent', () => {
  let component: VitaPlatoneComponent;
  let fixture: ComponentFixture<VitaPlatoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaPlatoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaPlatoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
