import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEliminarComponent } from './mostrar-eliminar.component';

describe('MostrarEliminarComponent', () => {
  let component: MostrarEliminarComponent;
  let fixture: ComponentFixture<MostrarEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
