import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'add-item', component: AddItemComponent, title: 'Add Item' },
  { path: 'detail/:id', component: DetailComponent, title: 'Detail' }
];
