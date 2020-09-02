export interface TransferUser {
  name: string;
  accountNumber: string;
  address: {
    postalCode: string;
    city: string;
    street: string;
  };
}

export interface NewTransferData {
  amount: number;
  title: string;
  recipientData: TransferUser;
}

export interface Transfer {
  _id: string;
  date: string;
  title: string;
  amount: number;
  senderData: TransferUser;
  recipientData: TransferUser;
}

