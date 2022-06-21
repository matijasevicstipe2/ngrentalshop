import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoggedInGuard} from "./security/logged-in.guard";
import {HomeComponent} from "./home/home.component";
import {ForbiddenPageComponent} from "./forbidden-page/forbidden-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AdminAuthorityGuard} from "./security/admin-authority.guard";
import {VhsmodeComponent} from "./vhsmode/vhsmode.component";
import {VhsDetailComponent} from "./vhs-detail/vhs-detail.component";
import {RentalNewComponent} from "./rental-new/rental-new.component";
import {RentalUpdateComponent} from "./rental-update/rental-update.component";
import {RentalComponent} from "./rental/rental.component";
import {VhsUpdateComponent} from "./vhs-update/vhs-update.component";
import {VhsNewComponent} from "./vhs-new/vhs-new.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'vhs',
    component: VhsmodeComponent,
    canActivate: [LoggedInGuard]
  },{
    path: 'rental',
    component: RentalComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'detail/:id',
    component: VhsDetailComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'new-rental',
    component: RentalNewComponent,
    canActivate: [AdminAuthorityGuard]
  },{
    path: 'new-vhs',
    component: VhsNewComponent,
    canActivate: [AdminAuthorityGuard]
  },
  {
    path: 'update-rental/:id',
    component: RentalUpdateComponent,
    canActivate: [AdminAuthorityGuard]
  },
  {
    path: 'update-vhs/:id',
    component: VhsUpdateComponent,
    canActivate: [AdminAuthorityGuard]
  },
  {
    path: 'forbidden',
    component: ForbiddenPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
