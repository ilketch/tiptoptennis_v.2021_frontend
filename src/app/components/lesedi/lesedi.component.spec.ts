import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesediComponent } from './lesedi.component';

describe('LesediComponent', () => {
  let component: LesediComponent;
  let fixture: ComponentFixture<LesediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
