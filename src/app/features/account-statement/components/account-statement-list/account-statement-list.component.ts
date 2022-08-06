import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { TransactionType } from './../../../shared/enums/transactionType.enum';
import { Statement } from '../../models/statement.model';
import { Transaction } from '../../models/transaction.model';
import { AccountStatementService } from '../../services/account-statement.service';
import { AccountDetails } from '../../models/accountDetails.model';

@Component({
  selector: 'app-account-statement-list',
  templateUrl: './account-statement-list.component.html',
  styleUrls: ['./account-statement-list.component.scss'],
})
export class AccountStatementListComponent implements OnInit, OnDestroy {
  public accountId: number = 0;
  public transactionList: Transaction[] | any;
  public statement: Statement | any;
  public accountDetails: AccountDetails | any;

  public TRANSACTION_TYPE = TransactionType;

  private subscriptions: Subscription = new Subscription();

  public displayedColumns: string[] = [
    'beneficiaryName',
    'transactionAmount',
    'transactionType',
    'transactionDate',
  ];

  @ViewChild('paginator') paginator: MatPaginator | undefined;

  constructor(
    private accountStatementService: AccountStatementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
        this.accountId = +params['accountId']; // Converts string id to number
        this.getAccountDetails(this.accountId);
        this.getStatement(this.accountId);
      })
    );
  }

  // Get List of Account Statement
  public getStatement(accountId: number): void {
    this.subscriptions.add(
      this.accountStatementService
        .getAccountStatement(accountId)
        .subscribe((data: Statement) => {
          this.statement = data;
          this.transactionList = data?.transactions;
        })
    );
  }

  // Get Account Details
  public getAccountDetails(accountId: number): void {
    this.subscriptions.add(
      this.accountStatementService
        .getAccountDetails(accountId)
        .subscribe((data: AccountDetails) => {
          this.accountDetails = data;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
