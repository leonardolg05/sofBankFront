import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-statements',
  template: `
    <div>
      <h2>Monthly Statement</h2>
      <p>Generated for the month: {{ month }}</p>
      <ul>
        <li *ngFor="let entry of statement">
          {{ entry.date | date }} - {{ entry.description }}: {{ entry.amount | currency }}
        </li>
      </ul>
    </div>
  `,
})
export class MonthlyStatementsComponent {
  @Input()
    month!: string;
  @Input()
    statement!: { date: Date; description: string; amount: number; }[];
}