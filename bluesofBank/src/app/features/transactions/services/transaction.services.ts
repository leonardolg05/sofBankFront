import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  private apiUrl = 'https://api.bluesoftbank.com/transaction';

  constructor(private http: HttpClient) {}

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}`);
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }
}