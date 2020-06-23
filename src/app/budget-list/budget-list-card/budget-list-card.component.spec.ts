import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListCardComponent } from './budget-list-card.component';

describe('BudgetListCardComponent', () => {
  let component: BudgetListCardComponent;
  let fixture: ComponentFixture<BudgetListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
