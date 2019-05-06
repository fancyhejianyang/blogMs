import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
const routes: Routes = [
  {
    path: '',
    canActivateChild: [
      // MetaGuard,
      AuthGuard
    ],
    loadChildren: './views/views.module#ViewsModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
