import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TLDRComponent } from './components/tldr/tldr.component';
import { DetailsComponent } from './components/details/details.component';
import { BriefComponent } from './components/brief/brief.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TLDRComponent,
    DetailsComponent,
    BriefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }