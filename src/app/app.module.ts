import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {SurveyComponent} from './survey/survey.component';
import {routing} from "./app.routing";
import {CookieService} from "./cookie.service";
import {CardComponent} from './card/card.component';
import {BookComponent} from './book/book.component';
import {ManageComponent} from './manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    SurveyComponent,
    CardComponent,
    BookComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
