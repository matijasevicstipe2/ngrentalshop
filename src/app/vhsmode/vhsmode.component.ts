import { Component, OnInit } from '@angular/core';
import {VHS} from "../vhs";
import {Router} from "@angular/router";
import {VhsService} from "../vhs.service";
import { Location } from '@angular/common';
import {Rental} from "../rental";
import {AuthenticationService} from "../security/authentication.service";

@Component({
  selector: 'app-vhsmode',
  templateUrl: './vhsmode.component.html',
  styleUrls: ['./vhsmode.component.css']
})
export class VhsmodeComponent implements OnInit {

  vhses?: VHS[];
  isUserAdmin: boolean;
  constructor(private vhsService: VhsService,private router: Router,
              private location: Location,private authenticationService: AuthenticationService) {
    this.isUserAdmin = this.authenticationService.isUserAdmin();
  }

  ngOnInit(): void {
    this.getVHSes();
  }
  getVHSes(): void {
    this.vhsService.getVHSes()
      .subscribe(vhses => this.vhses = vhses);
  }
  delete(vhs : VHS): void {
    this.vhsService.deleteVHS(vhs).subscribe(
      () => this.vhses = this.vhses?.filter(v => v !== vhs)
    );
  }

  newVHS() {
    this.router.navigate(['/new-vhs']).then();
  }
  updateVHS(id : number) {
    this.router.navigate(['/update-vhs/' + id]).then();
  }
  goBack(): void {
    this.location.back();
  }

}
