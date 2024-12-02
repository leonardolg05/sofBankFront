import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private apiUrl = 'https://api.bluesoftbank.com/accounts';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}`);
  }

  getAccountById(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }
}