import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-account-details',
  standalone:true,
  styles: `.account-detail-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    h2 {
      margin: 0;
      color: #333;
    }
  
    p {
      margin: 8px 0;
      color: #555;
    }
  
    .actions {
      margin-top: 16px;
      display: flex;
      gap: 8px;
  
      button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        transition: background-color 0.2s;
  
        &:hover {
          background-color: #0056b3;
        }
      }
    }
  } `,
  
  template: `
    <div class="account-detail-card">
      <h2>Detalle de Cuenta
      </h2>
      <div class="actions">
        <button (click)="checkBalance()">Check Balance</button>
      <!--  <button (click)="viewTransactions()">Ver Movimientos</button>
        <button (click)="deposit()">Consignar</button>
        <button (click)="withdraw()">Retirar</button>-->
      </div>
    </div>
  `
})
export class AccountDetailsComponent {
 @Input() account!: { type: string; balance: number; };
  @Output() view = new EventEmitter<void>();
  @Output() depositAction = new EventEmitter<void>();
  @Output() withdrawAction = new EventEmitter<void>();

  checkBalance() {
  }
  viewTransactions() {
    this.view.emit();
  }

  deposit() {
    this.depositAction.emit();
  }

  withdraw() {
    this.withdrawAction.emit();
  }
}