import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCalComponent } from './form-cal/form-cal.component';
import { ResultComponent } from './result/result.component';
import { BmiIntroComponent } from './documentation/bmi-intro/bmi-intro.component';
import { UsingBmiComponent } from './documentation/using-bmi/using-bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormCalComponent,
    ResultComponent,
    BmiIntroComponent,
    UsingBmiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
