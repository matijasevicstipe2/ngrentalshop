import {Component, Input, OnInit} from '@angular/core';
import {Rental} from "../rental";
import {ActivatedRoute} from "@angular/router";
import {RentalService} from "../rental.service";
import {Location} from "@angular/common";
import {VHS} from "../vhs";
import {VhsService} from "../vhs.service";

@Component({
  selector: 'app-vhs-update',
  templateUrl: './vhs-update.component.html',
  styleUrls: ['./vhs-update.component.css']
})
export class VhsUpdateComponent implements OnInit {

  @Input() vhs?: VHS;

  constructor(private route: ActivatedRoute, private vhsService : VhsService,private location: Location) { }

  ngOnInit(): void {
    this.getVHS();
  }

  getVHS(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const int = parseInt(id);
      this.vhsService.getVHS(int)
        .subscribe(vhs =>{
          this.vhs = vhs;
        })
    } else {
      console.error('id can not be null!');
    }
  }

  update(name: string,info: string,releaseYear: number,rating: string,runtime: number,score: number,price: number): void {
    name = name.trim();
    info = info.trim();
    if (this.vhs !== undefined) {
      const id = this.vhs.id;
      this.vhsService.updateVHS({id,name,info,releaseYear,rating,runtime,score,price} as VHS)
        .subscribe(() => this.goBack());
    } else {
      console.error('vhs can not be undefined!');
    }
  }

  goBack(): void {
    this.location.back();
  }

}
