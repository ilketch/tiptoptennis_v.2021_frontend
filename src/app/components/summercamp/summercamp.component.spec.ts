import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummercampComponent } from './summercamp.component';

describe('SummercampComponent', () => {
  let component: SummercampComponent;
  let fixture: ComponentFixture<SummercampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummercampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummercampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
