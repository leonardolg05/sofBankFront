import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AccountListComponent } from './components/account-list.component';


const routes: Routes = [
  { path: '', component: AccountListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
