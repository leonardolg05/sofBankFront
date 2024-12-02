import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './components/reports.component';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { AccountDetailsComponent } from '../features/accounts/components/account-details.component';

@NgModule({
  declarations: [ReportsComponent,AccountDetailsComponent ],
  exports: [ReportsComponent, AccountDetailsComponent ], // Exportación para que otros módulos puedan usarlo
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}