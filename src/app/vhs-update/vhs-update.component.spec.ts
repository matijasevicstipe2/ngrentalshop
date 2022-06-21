import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhsUpdateComponent } from './vhs-update.component';

describe('VhsUpdateComponent', () => {
  let component: VhsUpdateComponent;
  let fixture: ComponentFixture<VhsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
