import { AccountType } from "../../shared/enums/accountType.enum";

export interface AccountDetails {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    countryCode: string;
    accountNumber: string;
    bankName: string;
    iban: string;
    accountType: AccountType;
    accountBalance: number;
  }
  