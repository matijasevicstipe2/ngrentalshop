import {Component, Input, OnInit} from '@angular/core';
import {VHS} from "../vhs";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {VhsService} from "../vhs.service";

@Component({
  selector: 'app-vhs-detail',
  templateUrl: './vhs-detail.component.html',
  styleUrls: ['./vhs-detail.component.css']
})
export class VhsDetailComponent implements OnInit {

  @Input() vhs?: VHS;
  constructor(private route: ActivatedRoute, private vhsService: VhsService, private location: Location) { }

  ngOnInit(): void {
    this.getVHS();
  }

  getVHS(): void {
    const id = this.route.snapshot.paramMap.get('id');


    if (id !== null) {
      const int = parseInt(id);
      this.vhsService.getVHS(int)
        .subscribe(vhs => {
          this.vhs = vhs;
        });
    } else {
      console.error('id can not be null!');
    }
  }

  goBack(): void {
    this.location.back();
  }

}
