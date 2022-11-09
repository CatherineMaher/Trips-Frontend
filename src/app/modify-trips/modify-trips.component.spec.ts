import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTripsComponent } from './modify-trips.component';

describe('ModifyTripsComponent', () => {
  let component: ModifyTripsComponent;
  let fixture: ComponentFixture<ModifyTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
