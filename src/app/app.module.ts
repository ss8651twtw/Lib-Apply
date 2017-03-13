import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

import { AdminModule } from "./admin/admin.module";
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { AppRoutingModule } from "./app-routing.module";

import { HttpConfigService } from "./_services/http-config.service";
import { RequestService } from "./_services/request.service";
import { CookieService } from "./_services/cookie.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { PageformComponent } from './_template/pageform/pageform.component';
import { EnvelopeComponent } from './_template/envelope/envelope.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { BookComponent } from './book/book.component';
import { SurveyComponent } from './survey/survey.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from "./_services/auth-guard.service";
import { AuthService } from "./_services/auth.service";
import { CheckPersonComponent } from './check-person/check-person.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule( {
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule,
    FileUploadModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    CardComponent,
    BookComponent,
    SurveyComponent,
    PageformComponent,
    EnvelopeComponent,
    PageNotFoundComponent,
    CheckPersonComponent,
    CheckPersonComponent
  ],
  providers: [
    HttpConfigService,
    RequestService,
    CookieService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
