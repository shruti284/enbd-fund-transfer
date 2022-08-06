import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountDetails } from '../models/accountDetails.model';
import { Statement } from '../models/statement.model';
import { environment } from './../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AccountStatementAPIService {
  constructor(private httpClient: HttpClient) {}

  public getAccountStatement(accountId: number): Observable<Statement> {
    const url = environment.endpoint + '/accountStatement/' + accountId;
    return this.httpClient.get<Statement>(url);
    
  }

  public getAccountDetails(accountId: number): Observable<AccountDetails> {
    const url = environment.endpoint + '/accountDetails/' + accountId;
    return this.httpClient.get<AccountDetails>(url);
  }
}
