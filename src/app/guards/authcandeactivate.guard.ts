import { CanDeactivateFn } from '@angular/router';
import { CustomerComponent } from '../components/customer/customer.component';

export const authcandeactivateGuard: CanDeactivateFn<CustomerComponent> = (component, currentRoute, currentState, nextState) => {
  return component.cannavigate();
};
