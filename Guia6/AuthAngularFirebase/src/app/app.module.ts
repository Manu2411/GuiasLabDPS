import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase services + enviroment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Auth service
import { UserService } from './services/user.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, 
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
