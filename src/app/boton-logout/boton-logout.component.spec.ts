import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLogoutComponent } from './boton-logout.component';

describe('BotonLogoutComponent', () => {
  let component: BotonLogoutComponent;
  let fixture: ComponentFixture<BotonLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
