import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/dragons/dragons.module').then(m => m.DragonsModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
