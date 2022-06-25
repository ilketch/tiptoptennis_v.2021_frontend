import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummercampcarouselComponent } from './summercampcarousel.component';

describe('SummercampcarouselComponent', () => {
  let component: SummercampcarouselComponent;
  let fixture: ComponentFixture<SummercampcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummercampcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummercampcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
