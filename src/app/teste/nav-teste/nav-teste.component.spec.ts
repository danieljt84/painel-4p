import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTesteComponent } from './nav-teste.component';

describe('NavTesteComponent', () => {
  let component: NavTesteComponent;
  let fixture: ComponentFixture<NavTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
