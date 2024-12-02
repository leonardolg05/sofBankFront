export interface Transaction {
    id: number;
    IdAccount: string;
    idType: 'Savings' | 'Current';
    amount: number
    idCity: number;
    Date: Date;
  }