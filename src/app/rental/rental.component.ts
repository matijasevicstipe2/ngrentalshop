import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Rental} from "../rental";
import {RentalService} from "../rental.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals?: Rental[];

  constructor(
    private rentalService : RentalService,private router: Router,private location: Location) {
  }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(): void {
    this.rentalService.getRentals()
      .subscribe(rentals => this.rentals = rentals);
  }


  delete(rental: Rental): void {
    this.rentalService.deleteRental(rental).subscribe(
      () => this.rentals = this.rentals?.filter(r => r !== rental)
    );
  }

  newRental() {
    this.router.navigate(['/new-rental']).then();
  }
  updateRental(id : number) {
    this.router.navigate(['/update-rental/' + id]).then();
  }
  goBack(): void {
    this.location.back();
  }

}
