import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from '../features/accounts/components/account-list.component';
import { AccountRoutingModule } from '../features/accounts/account-routing.module';   

@NgModule({
  declarations: [AccountListComponent],
  imports: [CommonModule],
  exports: [AccountListComponent, AccountRoutingModule]
})
export class SharedModule { }
