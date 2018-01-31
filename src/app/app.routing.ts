import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutComponent,
    children: [
      {path: 'main', loadChildren: './pages/main/main.module#MainModule', canActivate: [AuthGuard]},
      {path: '**', redirectTo: 'main'}
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
