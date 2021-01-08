import { Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { HomeComponent } from './navegacao/home/home.component';
import { LoginComponent } from './navegacao/login/login.component';
import { UsersComponent } from './users/users.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'usuarios', component: UsersComponent},
    { path: 'fotos', component: FotosComponent},
    { path: 'login', component: LoginComponent}
];


