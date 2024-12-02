import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from '../components/account-list.component';
import { AccountRoutingModule } from '../account-routing.module';

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
