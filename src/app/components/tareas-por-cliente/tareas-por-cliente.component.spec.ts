import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPorClienteComponent } from './tareas-por-cliente.component';

describe('TareasPorClienteComponent', () => {
  let component: TareasPorClienteComponent;
  let fixture: ComponentFixture<TareasPorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasPorClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
