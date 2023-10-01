import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChapterCardComponent } from './chapter-card/chapter-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



import { MatInputModule } from '@angular/material/input';

import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth"
import { provideFirestore, getFirestore } from "@angular/fire/firestore"


// Import the functions you need from the SDKs you need

import { SettingsPageComponent } from './settings-page/settings-page.component';
import { AdminComponent } from './admin/admin.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, } from '@angular/fire/auth';

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


let app = AngularFireModule.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChapterCardComponent,
    MainPageComponent,
    HeaderComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SettingsPageComponent,
    AdminComponent,
    MilestoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatSidenavModule, 
    FormsModule, 
    MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  HttpClientModule, 
  FlexLayoutModule, 
  AngularFireModule.initializeApp(environment.firebase), 
  AngularFireAuthModule, 
   provideFirebaseApp(() => initializeApp(environment.firebase)), 
   provideFirestore(() => getFirestore()), 
   provideAuth(() => getAuth()), 
   
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
