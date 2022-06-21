import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhsmodeComponent } from './vhsmode.component';

describe('VhsmodeComponent', () => {
  let component: VhsmodeComponent;
  let fixture: ComponentFixture<VhsmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhsmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhsmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
