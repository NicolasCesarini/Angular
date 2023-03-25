import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHablidadesComponent } from './mis-hablidades.component';

describe('MisHablidadesComponent', () => {
  let component: MisHablidadesComponent;
  let fixture: ComponentFixture<MisHablidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisHablidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisHablidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
