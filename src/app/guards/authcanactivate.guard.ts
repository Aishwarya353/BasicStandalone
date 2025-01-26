import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authcanactivateGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);


  let page = route.url[0].path;
  if(route.url.length > 0){
    if(page === 'customer'){
      alert('You don\'t have access');
      router.navigate(['template']);
      //or
      router.navigateByUrl('/template');
      //both works the same to navigate to template component
      return true;//changed to true to make child work
  }
  else{
    return true;
  }
}
else{
  return true;
}
  // here if u return false then u won't be able to redirect to it
};
