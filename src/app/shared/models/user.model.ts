export interface User {
  _id: string;
  login: string;
  password: string[];
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: {
    postalCode: string;
    city: string;
    street: string;
  };
  parentsNames: {
    mother: string;
    father: string;
  };
  accountNumber: string;
  randomIndexes: number[];
  money: number;
}

export interface UserLoginData {
  login: string;
  password: string[];
}
