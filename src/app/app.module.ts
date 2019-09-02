import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TribunalService } from './service/tribunal.service';
import { AffaireService } from './service/affaire.service';
import { DocumentComponent } from './document/document.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    DocumentComponent,
    UserAdminComponent,
  ],
  providers: [TribunalService, AffaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
