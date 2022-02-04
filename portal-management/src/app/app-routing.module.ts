import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', loadChildren: () => import('../app/choose-org/choose-org.module').then(m => m.ChooseOrgModule) }]
  },
  {
    path: 'login', children: [
      { path: '', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule) }]
  },
  {
    path: 'register', children: [
      { path: '', loadChildren: () => import('../app/register/register.module').then(m => m.RegisterModule) }]
  },
  {
    path: 'portal', component: HomeComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'member',
        loadChildren: () => import('../app/member/member.module').then(m => m.MemberModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
