import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InlinetemplateandstyleComponent } from './components/inlinetemplateandstyle/inlinetemplateandstyle.component';
import { InlinetemplateComponent } from './components/inlinetemplate/inlinetemplate.component';
import { InlinestyleComponent } from './components/inlinestyle/inlinestyle.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddComponent } from './components/add/add.component';
import { StatusComponent } from './components/status/status.component';
import { authcanactivateGuard } from './guards/authcanactivate.guard';
import { childauthcanactivatechildGuard } from './guards/childauthcanactivatechild.guard';
import { authcandeactivateGuard } from './guards/authcandeactivate.guard';
import { LoginComponent } from './components/login/login.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

export const routes: Routes = [
    {
        path: '', component: TemplateFormsComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    // {
    //     path: 'about', component: AboutComponent
    // },
    {
        //with lazyloading - it won't be loaded in initial load see in source console
        path: 'about', 
        loadComponent:()=>import('./components/about/about.component').then(m=>m.AboutComponent),
    },
    {
        //paremetered route - for one parameter one
        path: 'about/:id', component: AboutComponent
    },
    {
        //paremetered route - for multiple parameters one
        path: 'about/:page/:id', component: AboutComponent
    },
    // {
    //     //Children route

    //     //Initially for both /customer and /customer/add only customer(parent) will be rendered children won't be rendered bcz in this case we need to use RouterOutlet in Parent template and import the same in its ts too.
    //     path: 'customer', component: CustomerComponent,
    //     children: [
    //         {
    //             path: 'add', component: AddComponent
    //         },
    //         {
    //             path: 'edit/:id', component: AddComponent
    //         }
    //     ]
    // },
    
    //ABOVE ONE IS WITHOUT GUARDS
    
    // {
    //     //Children route

    //     //Initially for both /customer and /customer/add only customer(parent) will be rendered children won't be rendered bcz in this case we need to use RouterOutlet in Parent template and import the same in its ts too.
    //     path: 'customer', component: CustomerComponent,canActivate:[authcanactivateGuard],
    //     children: [
    //         {
    //             path: 'add', component: AddComponent
    //         },
    //         {
    //             path: 'edit/:id', component: AddComponent
    //         }
    //     ]
    // },

    // ABOVE IS FOR CANACTIVATE
    
    {
        //Children route

        //Initially for both /customer and /customer/add only customer(parent) will be rendered children won't be rendered bcz in this case we need to use RouterOutlet in Parent template and import the same in its ts too.
        path: 'customer', component: CustomerComponent,canActivate:[authcanactivateGuard],canActivateChild:[childauthcanactivatechildGuard],canDeactivate:[authcandeactivateGuard],
        children: [
            {
                path: 'add', component: AddComponent
            },
            {
                path: 'edit/:id', component: AddComponent
            }
        ]
    },
    {
        path: 'inline', component: InlinetemplateandstyleComponent
    },
    {
        path: 'template', component: InlinetemplateComponent
    },
    {
        path: 'style', component: InlinestyleComponent
    },
    {
        path: '**', component: StatusComponent
    }
];
// for routing content router outlet acts as a placeholder in app component