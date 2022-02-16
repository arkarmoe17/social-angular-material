import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './utils/_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path:"",
        loadChildren:() =>import("./components/components.module").then(
          (m) => m.ComponentsModule
        )
      }
    ],     
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
