import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';

import{AngularFireModule}from '@angular/fire/compat';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContactComponent } from './contact/contact.component';
import { ClothesDesignSelectionComponent } from './clothes-design-selection/clothes-design-selection.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LadiesWearComponent } from './clothes-design-selection/ladies-wear/ladies-wear.component';
import { MensWearComponent } from './clothes-design-selection/mens-wear/mens-wear.component';
import { BabiesWearComponent } from './clothes-design-selection/babies-wear/babies-wear.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FirebseService } from './services/firebase.service';

@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AboutComponent,
    AdminPanelComponent,
    ContactComponent,
    ClothesDesignSelectionComponent,
    ConfirmOrderComponent,
    NavbarComponent,
    LadiesWearComponent,
    MensWearComponent,
    BabiesWearComponent
    
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    
    MatRippleModule,
    
    // AngularFireModule.initializeApp(environment.firebase),
   
   

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCVVQ8sTlrFXebAbfGNhFuhvNixd2O4d5I",
      authDomain: "tailormadesl.firebaseapp.com",
      projectId: "tailormadesl",
      storageBucket: "tailormadesl.appspot.com",
      messagingSenderId: "114015800258",
      appId: "1:114015800258:web:915abf7ec7d5b7380d245b"
    }),
    MatDatepickerModule
    
  ],
  providers: [FirebseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
