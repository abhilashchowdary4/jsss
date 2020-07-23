import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'BW-INDIA',
    component: BwIndiaComponent
  },
  {
    path: 'CHRISTMAS-FISH',
    component: ChristmasFishComponent
  },
  {
    path: 'KATIA',
    component: KatiaComponent
  },
  {
    path: 'THIS-IS-LOVE',
    component: ThisIsLoveComponent
  },
  {
    path: 'RESOLUTIONS',
    component: ResolutionsComponent
  },
  {
    path: 'TWO-FACED-FELLOW',
    component: TwoFacedFellowComponent
  },
  {
    path: 'OLA',
    component: OlaComponent
  },
  {
    path: 'FOREVER-PROFESSOR',
    component: ForeverProfessorComponent
  },
  {
    path: 'CONFESSIONS-OF-A-BOX-MAN',
    component: ConfessionsOfABoxManComponent
  },
  {
    path: 'AGENT-SAI-SRINIVASA-ATHREYA',
    component: AgentComponent
  },
  {
    path: 'DORASAANI',
    component: DorasaaniComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
