import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import firebase from "firebase/app";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


const firebaseConfig = {
  apiKey: "AIzaSyC6jSmkqpRIC_S9LWSQkLYqhigfG9MZs98",
  authDomain: "proyecto-1-71a4d.firebaseapp.com",
  databaseURL: "https://proyecto-1-71a4d-default-rtdb.firebaseio.com",
  projectId: "proyecto-1-71a4d",
  storageBucket: "proyecto-1-71a4d.appspot.com",
  messagingSenderId: "185459763127",
  appId: "1:185459763127:web:e3fee8b48a88d5c72baa32"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
