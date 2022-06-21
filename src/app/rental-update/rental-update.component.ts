import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Rental} from "../rental";
import {RentalService} from "../rental.service";

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {

  @Input() rental?: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService,private location: Location) { }

  ngOnInit(): void {
    this.getRental();
  }

  getRental(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const int = parseInt(id);
      this.rentalService.getRental(int)
        .subscribe(rental =>{
          this.rental = rental;
        })
    } else {
      console.error('id can not be null!');
    }
  }

  update(userId: number,vhsId:number,rentalDate: string,returnDate: string, status: string): void {
    rentalDate = rentalDate.trim();
    returnDate = returnDate.trim();
    if (this.rental !== undefined) {
      const id = this.rental.id;
      this.rentalService.updateRental({id,userId,vhsId,rentalDate,returnDate,status} as Rental)
        .subscribe(() => this.goBack());
    } else {
      console.error('hardware can not be undefined!');
    }
  }

  goBack(): void {
    this.location.back();
  }

}
