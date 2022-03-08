import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
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
import { ModalModule } from '../services/modal/modal.module';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SecurityQuestionDeleteComponent } from './security-question/security-question-delete/security-question-delete.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageComponent } from './language/language.component';
import { LanguageCreateComponent } from './language/language-create/language-create.component';
import { LanguageUpdateComponent } from './language/language-update/language-update.component';


const MaterialModules = [
  ModalModule,
  MatDialogModule,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule
]

const AppComponents = [
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
  SecurityQuestionViewComponent,
  SecurityQuestionCreateComponent,
  SecurityQuestionUpdateComponent,
  FooterComponent,
  CountryRemoveComponent,
  HeaderComponent,
  ModalComponent,
  SecurityQuestionDeleteComponent,
  SidenavComponent,
  LanguageComponent,
  LanguageCreateComponent,
  LanguageUpdateComponent,
]

@NgModule({
  declarations: AppComponents,
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class ComponentsModule { }
