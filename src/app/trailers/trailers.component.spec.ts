import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailersComponent } from './trailers.component';

describe('TrailersComponent', () => {
  let component: TrailersComponent;
  let fixture: ComponentFixture<TrailersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailersComponent]
    });
    fixture = TestBed.createComponent(TrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
