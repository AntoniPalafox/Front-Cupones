import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCuponComponent } from './ver-cupon.component';

describe('VerCuponComponent', () => {
  let component: VerCuponComponent;
  let fixture: ComponentFixture<VerCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCuponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
