import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppParamViewComponent } from './app-param/app-param-view/app-param-view.component';
import { CountryCreateComponent } from './country/country-create/country-create.component';
import { CountryRemoveComponent } from './country/country-remove/country-remove.component';
import { CountryUpdateComponent } from './country/country-update/country-update.component';
import { CountryViewComponent } from './country/country-view/country-view.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageComponent } from './language/language.component';
import { SecurityQuestionViewComponent } from './security-question/security-question-view/security-question-view.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // },
  {
    path:'',
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'customer-register',
        component: CustomerRegisterComponent
      },
      {
        path: 'login',
        component: CustomerLoginComponent,
      },
      {
        path: 'country',
        component: CountryViewComponent,
      },
      {
        path: 'app-param',
        component: AppParamViewComponent,
      },
      {
        path: 'security-question',
        component: SecurityQuestionViewComponent,
      },
      {
        path: "language",
        component: LanguageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
