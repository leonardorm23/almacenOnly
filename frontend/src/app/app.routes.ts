import { RouterModule, Routes } from '@angular/router';  
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component' ;
import { AboutUsComponent } from './components/about-us/about-us.component' ;
import { ContactComponent } from './components/contact/contact.component' ;
import { MyAccountComponent } from './components/my-account/my-account.component' ;
import { CartComponent } from './components/cart/cart.component' ;
import { CardProductComponent } from './components/card-product/card-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'store', component: CardProductComponent  },
    { path: 'dashboard', component: AdminDashboardComponent  },
  
    { path: 'aboutUs', component: AboutUsComponent  },
    { path: 'contact', component: ContactComponent  },
    { path: 'myAccount', component: MyAccountComponent  },
    { path: 'cart', component: CartComponent  },
    { path: 'product', component: ListProductComponent  },
    { path: 'product/createproduct', component: CreateProductComponent  },
    { path: 'product/editproduct/:id', component: EditProductComponent  },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }


];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash:true});
