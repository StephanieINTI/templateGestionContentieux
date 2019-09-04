import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TablesComponent } from 'src/app/pages/tables/tables.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { TribunalComponent } from 'src/app/pages/tribunal/tribunal.component';
import { UserAdminComponent } from 'src/app/pages/user-admin/user-admin.component';
import { UserAvocatComponent } from 'src/app/pages/user-avocat/user-avocat.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SearchPipe } from 'src/app/pages/user-admin/search.pipe';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
     FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [
    UserProfileComponent,
    IconsComponent,
    MapsComponent,
    TablesComponent,
    AffaireComponent,
    DashboardComponent,
    TribunalComponent,
    UserAdminComponent,
    UserAvocatComponent,
    LoginComponent,
    SearchPipe
  ]
})

export class AdminLayoutModule {}
