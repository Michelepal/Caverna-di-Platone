import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedipaginaComponent } from './piedipagina.component';

describe('PiedipaginaComponent', () => {
  let component: PiedipaginaComponent;
  let fixture: ComponentFixture<PiedipaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedipaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedipaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
