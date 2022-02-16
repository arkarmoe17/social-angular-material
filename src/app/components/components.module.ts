import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ClickOutsideDirective } from '../utils/directive/click-outside.directive';
import { AppParamUpdateComponent } from './app-param/app-param-update/app-param-update.component';
import { AppParamViewComponent } from './app-param/app-param-view/app-param-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CountDownComponent } from './count-down/count-down.component';
import { CountryCreateComponent } from './country/country-create/country-create.component';
import { CountryRemoveComponent } from './country/country-remove/country-remove.component';
import { CountryUpdateComponent } from './country/country-update/country-update.component';
import { CountryViewComponent } from './country/country-view/country-view.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SecurityQuestionCreateComponent } from './security-question/security-question-create/security-question-create.component';
import { SecurityQuestionUpdateComponent } from './security-question/security-question-update/security-question-update.component';
import { SecurityQuestionViewComponent } from './security-question/security-question-view/security-question-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    CustomerRegisterComponent,
    CountDownComponent,
    CartViewComponent,
    CustomerLoginComponent,
    DashboardComponent,
    MainComponent,
    CheckoutComponent,
    CountryViewComponent,
    CountryCreateComponent,
    CountryUpdateComponent,
    SidebarComponent,
    AppParamViewComponent,
    AppParamUpdateComponent,
    ClickOutsideDirective,
    SecurityQuestionViewComponent,
    SecurityQuestionCreateComponent,
    SecurityQuestionUpdateComponent,
    FooterComponent,
    CountryRemoveComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ComponentsModule { }
