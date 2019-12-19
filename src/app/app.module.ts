import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import {GameService} from './game.service'
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "game", component: GameComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
