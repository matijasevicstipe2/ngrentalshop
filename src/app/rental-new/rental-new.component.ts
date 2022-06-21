import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {RentalService} from "../rental.service";
import {Rental, RentalCommand} from "../rental";

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.css']
})
export class RentalNewComponent implements OnInit {

  constructor(
    private rentalService: RentalService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }

  add(userId: number,vhsId:number,rentalDate: string,returnDate: string, status: string): void {
    rentalDate = rentalDate.trim();
    returnDate = returnDate.trim();

    this.rentalService.addRental({userId,vhsId,rentalDate,returnDate,status} as RentalCommand)
      .subscribe(
        () => {
          this.router.navigate(['/rental']).then();
        }
      )
  }
  goBack(): void {
    this.location.back();
  }


}
