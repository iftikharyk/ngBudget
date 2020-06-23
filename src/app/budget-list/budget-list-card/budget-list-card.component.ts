import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-list-card',
  templateUrl: './budget-list-card.component.html',
  styleUrls: ['./budget-list-card.component.scss']
})
export class BudgetListCardComponent implements OnInit {

  @Input() isIncome: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
