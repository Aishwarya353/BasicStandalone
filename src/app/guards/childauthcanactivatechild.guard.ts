import { CanActivateChildFn } from '@angular/router';

export const childauthcanactivatechildGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
