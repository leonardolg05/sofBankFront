import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './app-reports.component.html',
})
export class ReportsComponent {
  @Input() topCustomers!: any[];
  @Input() outOfCityWithdrawals!: any[];
}