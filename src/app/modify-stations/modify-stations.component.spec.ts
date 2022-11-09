import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStationsComponent } from './modify-stations.component';

describe('ModifyStationsComponent', () => {
  let component: ModifyStationsComponent;
  let fixture: ComponentFixture<ModifyStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
