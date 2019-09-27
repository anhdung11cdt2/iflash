import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { redirectLoggedInTo, redirectUnauthorizedTo, canActivate, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { UserLayoutComponent } from './user-layout/user-layout.component';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: UserLayoutComponent,
  },
  // {
  //   path: 'login',
  //   component: LoginLayoutComponent,
  //   canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard },
  //   children: [
  //     {
  //       path: '',
  //       canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard },
  //       loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
