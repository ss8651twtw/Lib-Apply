import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";
import { SurveyComponent } from "./survey/survey.component";
import { ManageComponent } from "./manage/manage.component";

const APP_ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'card', component: CardComponent },
  { path: 'book', component: BookComponent },
  { path: 'survey', component: SurveyComponent }
];

export const routing = RouterModule.forRoot( APP_ROUTES );
