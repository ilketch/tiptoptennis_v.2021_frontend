import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChisiamocarouselComponent } from './chisiamocarousel.component';

describe('ChisiamocarouselComponent', () => {
  let component: ChisiamocarouselComponent;
  let fixture: ComponentFixture<ChisiamocarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChisiamocarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChisiamocarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
