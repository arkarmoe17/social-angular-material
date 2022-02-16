import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppParamUpdateComponent } from './components/app-param/app-param-update/app-param-update.component';
import { AppParamViewComponent } from './components/app-param/app-param-view/app-param-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ComponentsModule } from './components/components.module';
import { CountDownComponent } from './components/count-down/count-down.component';
import { CountryCreateComponent } from './components/country/country-create/country-create.component';
import { CountryRemoveComponent } from './components/country/country-remove/country-remove.component';
import { CountryUpdateComponent } from './components/country/country-update/country-update.component';
import { CountryViewComponent } from './components/country/country-view/country-view.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SecurityQuestionCreateComponent } from './components/security-question/security-question-create/security-question-create.component';
import { SecurityQuestionUpdateComponent } from './components/security-question/security-question-update/security-question-update.component';
import { SecurityQuestionViewComponent } from './components/security-question/security-question-view/security-question-view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClickOutsideDirective } from './utils/directive/click-outside.directive';
import { AppInjector } from './utils/injector';

import { AuthGuard } from './utils/_guards/auth.guard';
import { AuthService } from './utils/_services/auth.service';
import { TokenInterceptorService } from './utils/_services/token/token-interceptor.service';


export function tokenGetter() {
  console.log("token is getting.");
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    // CountDownComponent,
    // CartViewComponent,
    // CustomerLoginComponent,
    // DashboardComponent,
    // MainComponent,
    // CheckoutComponent,
    // CountryViewComponent,
    // CountryCreateComponent,
    // CountryUpdateComponent,
    // SidebarComponent,
    // AppParamViewComponent,
    // AppParamUpdateComponent,
    // ClickOutsideDirective,
    // SecurityQuestionViewComponent,
    // SecurityQuestionCreateComponent,
    // SecurityQuestionUpdateComponent,
    // FooterComponent,
    // CountryRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule, // main components
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  // providers: [AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  providers: [AuthService,AppInjector,AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(appInjector: AppInjector) { }
}
