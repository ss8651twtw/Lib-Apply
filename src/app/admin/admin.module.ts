import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ManageBookComponent } from "./manage-book/manage-book.component";
import { ManageSurveyComponent } from "./manage-survey/manage-survey.component";

@NgModule( {
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    AdminComponent,
    ManageBookComponent,
    ManageSurveyComponent
  ]
} )
export class AdminModule { }
