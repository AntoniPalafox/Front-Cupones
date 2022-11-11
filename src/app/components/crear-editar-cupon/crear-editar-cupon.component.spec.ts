import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarCuponComponent } from './crear-editar-cupon.component';

describe('CrearEditarCuponComponent', () => {
  let component: CrearEditarCuponComponent;
  let fixture: ComponentFixture<CrearEditarCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarCuponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditarCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
