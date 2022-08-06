import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUIModule } from '../shared/material-ui.module';
import { AccountStatementComponent } from './account-statement.component';
import { AccountStatementRoutingModule } from './account-statement.routes.module';
import { AccountStatementListComponent } from './components/account-statement-list/account-statement-list.component';
import { TransferDetailsComponent } from './components/transfer-details/transfer-details.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialUIModule,
        AccountStatementRoutingModule
    ],
    declarations: [AccountStatementComponent, TransferDetailsComponent,
        AccountStatementListComponent,],
})
export class AccountStatementModule { }
