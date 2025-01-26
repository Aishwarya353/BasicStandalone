import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authcandeactivateGuard } from './authcandeactivate.guard';

describe('authcandeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authcandeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
