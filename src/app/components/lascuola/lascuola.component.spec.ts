import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LascuolaComponent } from './lascuola.component';

describe('LascuolaComponent', () => {
  let component: LascuolaComponent;
  let fixture: ComponentFixture<LascuolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LascuolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LascuolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
