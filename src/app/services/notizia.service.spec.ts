import { TestBed } from '@angular/core/testing';

import { NotiziaService } from './notizia.service';

describe('NotiziaService', () => {
  let service: NotiziaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotiziaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
