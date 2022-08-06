import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountDetails } from '../models/accountDetails.model';
import { Statement } from '../models/statement.model';
import { AccountStatementAPIService } from './account-statement-api.service';

@Injectable({
  providedIn: 'root',
})
export class AccountStatementService {
  constructor(private accountStatementAPIService: AccountStatementAPIService) {}

  // Scope for adding some business logic
  public getAccountStatement(accountId: number): Observable<Statement> {
    return this.accountStatementAPIService.getAccountStatement(accountId);
  }

  // Scope for adding some business logic
  public getAccountDetails(accountId: number): Observable<AccountDetails> {
    return this.accountStatementAPIService.getAccountDetails(accountId);
  }
}
