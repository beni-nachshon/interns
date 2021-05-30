import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { Register1Component } from './components/register1/register1.component';
import { Register3Component } from './components/register3/register3.component';
import { Register2Component } from './components/register2/register2.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { Questionnaire1Component } from './components/questionnaire1/questionnaire1.component';
import { Questionnaire3Component } from './components/questionnaire3/questionnaire3.component';
import { Questionnaire4Component } from './components/questionnaire4/questionnaire4.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { LogintestComponent } from './components/logintest/logintest.component';

const routes: Routes = [
  {path : "", component : OnboardingComponent},
  {path : "register1", component : Register1Component},
  {path : "register2", component : Register2Component},
  {path : "register3", component : Register3Component},
  {path : "questionnaire1", component : Questionnaire1Component},
  {path : "questionnaire2", component : Questionnaire2Component},
  {path : "questionnaire3", component : Questionnaire3Component},
  {path : "questionnaire4", component : Questionnaire4Component},
  {path : "login", component : LoginComponent},
  {path : "Password", component : PasswordComponent},
  {path : "Logintest", component : LogintestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
