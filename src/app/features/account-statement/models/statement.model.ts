import { Transaction } from "./transaction.model";

export interface Statement {
    id: number;
    currentBalance: string;
    transactions: Transaction[];
  }
  