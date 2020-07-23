import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third party

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { BwIndiaComponent } from './projects/bw-india/bw-india.component';
import { ChristmasFishComponent } from './projects/christmas-fish/christmas-fish.component';
import { KatiaComponent } from './projects/katia/katia.component';
import { ThisIsLoveComponent } from './projects/this-is-love/this-is-love.component';
import { ErrorComponent } from './error/error.component';
import { ResolutionsComponent } from './projects/resolutions/resolutions.component';
import { TwoFacedFellowComponent } from './projects/two-faced-fellow/two-faced-fellow.component';
import { OlaComponent } from './projects/ola/ola.component';
import { ForeverProfessorComponent } from './projects/forever-professor/forever-professor.component';
import { ConfessionsOfABoxManComponent } from './projects/confessions-of-a-box-man/confessions-of-a-box-man.component';
import { AgentComponent } from './projects/agent/agent.component';
import { DorasaaniComponent } from './projects/dorasaani/dorasaani.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectComponent,
    ContactComponent,
    BwIndiaComponent,
    ChristmasFishComponent,
    KatiaComponent,
    ThisIsLoveComponent,
    ErrorComponent,
    ResolutionsComponent,
    TwoFacedFellowComponent,
    OlaComponent,
    ForeverProfessorComponent,
    ConfessionsOfABoxManComponent,
    AgentComponent,
    DorasaaniComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
