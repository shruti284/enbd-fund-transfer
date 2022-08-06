import { AccountType } from "../../shared/enums/accountType.enum";
import { TransactionType } from "../../shared/enums/transactionType.enum";

export interface Transaction {
    id: number;
    transactionType: TransactionType;
    transactionAmount: string;
    transactionComments?: string;
    beneficiaryName: string;
    transactionDate: string;
    beneficiaryAccountNumber: string;
    beneficiaryBankName: string;
    accountBalance: string;
    accountType: AccountType;
    currency: string;
}