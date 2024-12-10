import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearinstitucionPage } from './crearinstitucion.page';

describe('CrearinstitucionPage', () => {
  let component: CrearinstitucionPage;
  let fixture: ComponentFixture<CrearinstitucionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearinstitucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
