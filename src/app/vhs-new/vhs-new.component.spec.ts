import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhsNewComponent } from './vhs-new.component';

describe('VhsNewComponent', () => {
  let component: VhsNewComponent;
  let fixture: ComponentFixture<VhsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
