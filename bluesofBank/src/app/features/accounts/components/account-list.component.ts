import { Component, OnInit } from '@angular/core';
import { AccountService } from  '../services/account.service';
import { Account } from '../models/account.model';

@Component({
  standalone:true,
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }
}