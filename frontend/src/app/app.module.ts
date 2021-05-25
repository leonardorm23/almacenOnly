import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
//routes
import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PayGateComponent } from './components/pay-gate/pay-gate.component';
import { StoreComponent } from './components/store/store.component';
import { UserClientComponent } from './components/user-client/user-client.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AdminDashboardComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    MyAccountComponent,
    PayGateComponent,
    StoreComponent,
    UserClientComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
