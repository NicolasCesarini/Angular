import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesDashboardComponent } from './botones-dashboard.component';

describe('BotonesDashboardComponent', () => {
  let component: BotonesDashboardComponent;
  let fixture: ComponentFixture<BotonesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
