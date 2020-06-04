import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
   {
      path: 'dashboard', loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
   imports: [RouterModule.forRoot(ROUTES)],
   exports: [RouterModule]
})

export class AppRoutingModule { }
