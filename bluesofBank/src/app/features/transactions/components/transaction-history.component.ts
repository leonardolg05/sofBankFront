import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  styles:
  `div {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 20px;
  }`,
  template: `
    <div>
      <h2>Transaccion Reciente</h2>

          {{ transactions.date | date }} - {{ transactions.type }}: {{ transactions.amount | currency }}

    </div>
  `,
  imports:[CommonModule]
})
export class TransactionHistoryComponent {
  @Input()
    transactions!: { date: Date; type: string; amount: number; };
}
