import { HomeComponent } from './components/home/home.component';
import { BlogCreateComponent } from './components/posts/blogs/blog-create/blog-create.component';
import { Routes, RouterModule } from "@angular/router";

const rootRoutes: Routes = [
    { path: 'home', component: HomeComponent}, // first page is the home component route
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // auto redirect to home page if no route in url
    { path: 'getStarted', component: BlogCreateComponent }
]

export const routing = RouterModule.forRoot(rootRoutes);

