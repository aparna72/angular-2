import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ServicenameService } from './servicename.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'Home',component:HomeComponent},
    {path:'Register',component:RegisterComponent},
    {path:'Login',component:LoginComponent}

    ])

  ],
  providers: [ServicenameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
