// transaction-form.component.ts
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports:[FormsModule],
  styles:`
  div {
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
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  select,
  input[type="number"] {
    padding: 8px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }
  
  select:focus,
  input[type="number"]:focus {
    border-color: #007bff;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }`,
  template: `
    <div>
      <h2>Hacer Transaccion</h2>
      <form (ngSubmit)="onSubmit()">
        <label for="type">Tipo Transaccion:</label>
        <select [(ngModel)]="transaction.type" name="type">
          <option value="Deposito">Deposito</option>
          <option value="Retiro">Retiro</option>
        </select>

        <label for="amount">Cantidad:</label>
        <input type="number" [(ngModel)]="transaction.amount" name="amount" required>

        <button type="submit">Ejecutar</button>
      </form>
    </div>
  `,
})
export class TransactionFormComponent {
  @Input() transaction = { date: new Date(), type: '', amount: 0 };  // Initialize transaction

  @Output() transactionMade = new EventEmitter<{ date: Date; type: string; amount: number }>();

  onSubmit() {
    this.transactionMade.emit(this.transaction);
  }
}
