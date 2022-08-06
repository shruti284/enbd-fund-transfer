import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountStatementListComponent } from './components/account-statement-list/account-statement-list.component';
import { AccountStatementComponent } from './account-statement.component';
import { TransferDetailsComponent } from './components/transfer-details/transfer-details.component';

const routes: Routes = [
    // { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: '', component: AccountStatementComponent},
  {
    path: 'statement/:accountId',
    component: AccountStatementListComponent,
  },
  {
    path: 'statement/transaction-details/:transId',
    component: TransferDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountStatementRoutingModule { }
