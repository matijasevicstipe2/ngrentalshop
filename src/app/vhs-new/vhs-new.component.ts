import { Component, OnInit } from '@angular/core';
import {RentalService} from "../rental.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {RentalCommand} from "../rental";
import {VhsService} from "../vhs.service";
import {VHSCommand} from "../vhs";

@Component({
  selector: 'app-vhs-new',
  templateUrl: './vhs-new.component.html',
  styleUrls: ['./vhs-new.component.css']
})
export class VhsNewComponent implements OnInit {

  constructor(
    private vhsService : VhsService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }

  add(name: string,info: string,releaseYear: number,rating: string,runtime: number,score: number,price: number): void {
    name = name.trim();
    info = info.trim();

    this.vhsService.addVHS({name,info,releaseYear,rating,runtime,score,price} as VHSCommand)
      .subscribe(
        () => {
          this.router.navigate(['/vhs']).then();
        }
      )
  }
  goBack(): void {
    this.location.back();
  }

}
