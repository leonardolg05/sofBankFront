export interface Account {
    id: string;
    number: string;
    type: 'Savings' | 'Current';
    balance: number;
    createdDate: Date;
  }