import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',               redirectTo: '/login', pathMatch: 'full'},
    { path: 'dashboard',      component: DashboardComponent },
   /* { path: 'user-profile',   component: UserProfileComponent },*/
    { path: 'tables',         component: TablesComponent },
    {path:'login',            component:LoginComponent}
    /*{ path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }*/
];
