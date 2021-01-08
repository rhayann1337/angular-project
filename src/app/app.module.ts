import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { rootRouterConfig } from './app.routes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { FotosComponent } from './fotos/fotos.component';
import { FotosService } from './services/fotos.service';
import { FooterComponent } from './navegacao/footer/footer.component';
import { LoginComponent } from './navegacao/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UsersComponent,
    FotosComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    [RouterModule.forRoot(rootRouterConfig)],
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    UsersService,
    FotosService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
