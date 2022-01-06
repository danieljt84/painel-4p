import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNavComponent } from './b-nav.component';

describe('BNavComponent', () => {
  let component: BNavComponent;
  let fixture: ComponentFixture<BNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
