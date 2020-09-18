import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// Components
import { StudentsComponent } from './components/students/students.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StudentComponent } from './components/students/student/student.component';

// Service
import { StudentService } from './services/student.service';


// Toastr, para notificaciones en angular
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentListComponent,
    StudentComponent
  ],
  imports: [ // Se importan todas las dependencias, para utilizarlos en todo el proyecto.
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ // El servicio se configura global, para utilizarlos en todo el proyecto.
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
