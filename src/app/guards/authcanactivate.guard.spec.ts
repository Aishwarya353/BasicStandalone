import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authcanactivateGuard } from './authcanactivate.guard';

describe('authcanactivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authcanactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
