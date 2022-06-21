import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhsDetailComponent } from './vhs-detail.component';

describe('VhsDetailComponent', () => {
  let component: VhsDetailComponent;
  let fixture: ComponentFixture<VhsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
