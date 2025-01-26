import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childauthcanactivatechildGuard } from './childauthcanactivatechild.guard';

describe('childauthcanactivatechildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childauthcanactivatechildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
