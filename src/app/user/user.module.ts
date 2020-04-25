import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
      UserRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    entryComponents: [],
    providers: [],
  })
  export class UserModule { }