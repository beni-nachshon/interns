import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Register1Component } from './components/register1/register1.component';
import { FormsModule } from '@angular/forms';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { Questionnaire1Component } from './components/questionnaire1/questionnaire1.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { InternNameComponent } from './components/intern-name/intern-name.component';
import { Questionnaire3Component } from './components/questionnaire3/questionnaire3.component';
import { Questionnaire4Component } from './components/questionnaire4/questionnaire4.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { LogintestComponent } from './components/logintest/logintest.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { SupervisorRegisterComponent } from './components/supervisor-register/supervisor-register.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { GetAllComponent } from './components/get-all/get-all.component';
@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    Register1Component,
    Register2Component,
    Register3Component,
    Questionnaire1Component,
    Questionnaire2Component,
    LogoComponent,
    InternNameComponent,
    Questionnaire3Component,
    Questionnaire4Component,
    LoginComponent,
    PasswordComponent,
    LogintestComponent,
    HeaderLoginComponent,
    SupervisorRegisterComponent,
    SupervisorComponent,
    GetAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
