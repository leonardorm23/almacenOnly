import { RouterModule, Routes } from '@angular/router';  
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component' ;
import { AboutUsComponent } from './components/about-us/about-us.component' ;
import { ContactComponent } from './components/contact/contact.component' ;
import { MyAccountComponent } from './components/my-account/my-account.component' ;
import { CartComponent } from './components/cart/cart.component' ;


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'store', component: StoreComponent  },
    { path: 'aboutUs', component: AboutUsComponent  },
    { path: 'contact', component: ContactComponent  },
    { path: 'myAccount', component: MyAccountComponent  },
    { path: 'cart', component: CartComponent  },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash:true});
