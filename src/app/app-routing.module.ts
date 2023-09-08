import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileResolver } from "./profile/profile-resolver.service";
import { authGuard } from "./auth.guard";



const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomepageComponent, canActivate:[authGuard]},
    {path: 'home/profile/:id', component: ProfileComponent, resolve: {profile: ProfileResolver}},
    {path: '**', component: LoginComponent}
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }