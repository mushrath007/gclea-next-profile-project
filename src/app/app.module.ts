import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamProfilesComponent } from './team-profiles/team-profiles.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamProfilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
