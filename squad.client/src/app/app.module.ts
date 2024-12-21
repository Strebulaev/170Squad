import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MaksimushkaComponent } from './maksimushka/maksimushka.component';
import { VikushaComponent } from './vikusha/vikusha.component';
import { IlushaComponent } from './ilusha/ilusha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SergeyComponent } from './sergey/sergey.component';
import { ArsushaComponent } from './arsusha/arsusha.component';
import { LoginComponent } from './login/login.component';
import { LoreComponent } from './lore/lore.component';
import { BronzeCopperComponent } from './bronze-copper/bronze-copper.component';
import { DndchessComponent } from './dndchess/dndchess.component';
import { DonatComponent } from './donat/donat.component';
import { FanartsComponent } from './fanarts/fanarts.component';
import { DubStepComponent } from './dub-step/dub-step.component';
import { CountdownComponent } from './countdown/countdown.component';
import { IisComponent } from './iis/iis.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TetrisComponent } from './tetris/tetris.component';
import { ChatComponent } from './chat/chat.component';
import { MessageService } from './message.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketIOService } from './socket-io.service';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    IlushaComponent,
    ArsushaComponent,
    LoginComponent,
    VikushaComponent,
    MaksimushkaComponent,
    SergeyComponent,
    BronzeCopperComponent,
    CountdownComponent,
    DndchessComponent,
    IisComponent,
    DonatComponent,
    LoreComponent,
    TetrisComponent,
    ChatComponent


  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB2VqdO1TysCgMWDq-7SBpEPmM2hsqcTWo',
      authDomain: 'my-1923109381903103-project.firebaseapp.com',
      projectId: 'my-1923109381903103-project',
      storageBucket: 'my-1923109381903103-project.appspot.com',
      messagingSenderId: '679580570215',
      appId: '1:679580570215:web:52929f234fced4746ffac2'
    }),
    AngularFireAuthModule,
    SocketIoModule.forRoot(config),
    AngularFirestoreModule,      
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'ilusha', component: IlushaComponent },
      { path: 'arsusha', component: ArsushaComponent },
      { path: 'login', component: LoginComponent },
      { path: 'vikusha', component: VikushaComponent },
      { path: 'maksimushka', component: MaksimushkaComponent },
      { path: 'sergey', component: SergeyComponent },
      { path: 'lore', component: LoreComponent },
      { path: 'bronze-copper', component: BronzeCopperComponent },
      { path: 'dndchess', component: DndchessComponent },
      { path: 'donat', component: DonatComponent },
      { path: 'dub-step', component: DubStepComponent },
      { path: 'fanarts', component: FanartsComponent },
      { path: 'iis', component: IisComponent },
      { path: 'countdown', component: CountdownComponent },
      { path: 'tetris', component: TetrisComponent },
      { path: 'chat', component: ChatComponent },
    ]),
  ],
  providers: [{ provide: SocketIOService, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
