import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./_services/auth-guard.service";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";
import { SurveyComponent } from "./survey/survey.component";
import { CheckPersonComponent } from "./check-person/check-person.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card', component: CardComponent },
  { path: 'book', canActivate: [ AuthGuardService ], component: BookComponent },
  { path: 'survey', canActivate: [ AuthGuardService ], component: SurveyComponent },
  { path: 'check/:id', component: CheckPersonComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( appRoutes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
