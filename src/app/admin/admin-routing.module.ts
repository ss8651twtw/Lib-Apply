import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../_services/auth-guard.service";
import { AdminComponent } from "./admin.component";
import { ManageSurveyComponent } from "./manage-survey/manage-survey.component";
import { ManageBookComponent } from "./manage-book/manage-book.component";

const adminRoutes: Routes = [
  { path: 'admin', canActivate: [ AuthGuardService ], component: AdminComponent },
  { path: 'admin/book', canActivate: [ AuthGuardService ], component: ManageBookComponent },
  { path: 'admin/survey', canActivate: [ AuthGuardService ], component: ManageSurveyComponent }
];

@NgModule( {
  imports: [ RouterModule.forChild( adminRoutes ) ],
  exports: [ RouterModule ]
} )
export class AdminRoutingModule { }
