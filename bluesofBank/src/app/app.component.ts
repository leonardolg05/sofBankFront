import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/components/dashboard.component';
import { AccountDetailsComponent } from './features/accounts/components/account-details.component';
import { TransactionFormComponent } from './features/transactions/components/transaction-form.component';
import { TransactionHistoryComponent } from './features/transactions/components/transaction-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [RouterOutlet, NgFor, RouterModule]
})
export class AppComponent {
  options = [
    { title: 'Consultar el saldo de la cuenta', route: 'dashboard' },
    { title: 'Consultar los movimientos más recientes', route: "accounts" },
    { title: 'Generar extractos mensuales', route: "/dashboard" }
  ];





  currentAccount = {
    type: 'Savings',
    balance: 5000,
  };

  transaction = [
    { date: new Date(), type: 'Deposit', amount: 1000 },
    { date: new Date(), type: 'Withdrawal', amount: 500 },
  ];

  transactionSimp = { date: new Date(), type: 'Deposit', amount: 1000 };
  selectedMonth = 'October';
  monthlyStatement = [
    { date: new Date(), description: 'Deposit', amount: 2000 },
    { date: new Date(), description: 'Withdrawal', amount: 700 },
  ];

  topCustomers = [
    { name: 'John Doe', transactions: 25 },
    { name: 'Jane Smith', transactions: 18 },
  ];

  outOfCityWithdrawals = [
    { name: 'Alice Brown', totalWithdrawals: 1200000 },
  ];

  handleTransaction(transaction: { date: Date; type: string; amount: number }) {
    console.log('Transaction received:', transaction);
  }

  /*handleTransaction(transactionSimp: {date: Date, type: string, amount: number }) {
    if (transactionSimp.type === 'Deposit') {
      this.currentAccount.balance += transactionSimp.amount;
    } else if (transactionSimp.type === 'Withdrawal' && this.currentAccount.balance >= transactionSimp.amount) {
      this.currentAccount.balance -= transactionSimp.amount;
    } else {
      alert('Insufficient balance for this withdrawal.');
    }

    this.transaction.unshift({
      date: new Date(),
      type: transactionSimp.type,
      amount: transactionSimp.amount,
    });
    return{
      date: new Date(),
      type: transactionSimp.type,
      amount: transactionSimp.amount,
    }
  }*/
}
