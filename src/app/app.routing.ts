import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";
import { SurveyComponent } from "./survey/survey.component";
import { ManageComponent } from "./manage/manage.component";
import { ManageBookComponent } from "./manage/manage-book/manage-book.component";
import { ManageSurveyComponent } from "./manage/manage-survey/manage-survey.component";

const APP_ROUTES = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'manage/book', component: ManageBookComponent },
  { path: 'manage/survey', component: ManageSurveyComponent },
  { path: 'card', component: CardComponent },
  { path: 'book', component: BookComponent },
  { path: 'survey', component: SurveyComponent }
];

export const routing = RouterModule.forRoot( APP_ROUTES );
