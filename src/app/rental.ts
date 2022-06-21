export interface Rental {
  id:number;
  userId: number;
  vhsId: number;
  rentalDate: string;
  returnDate: string;
  paid: number;
  status: string;
  lateFee: number;
}

export interface RentalCommand {
  userId: number;
  vhsId: number;
  rentalDate: string;
  returnDate: string;
  status: string;
}
