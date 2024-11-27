import { DummyPostComponent } from './dummy-post/dummy-post.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { NoteListComponent } from './note-list/note-list.component';
import { CrudOpsComponent } from './crud-ops/crud-ops.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedRouteComponent } from './nested-route/nested-route.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { LocalStorageComponent } from './localstorage/local-storage/local-storage.component';
import { AllUsersComponent } from './localstorage/all-users/all-users.component';
import { CreateUserComponent } from './localstorage/create-user/create-user.component';
import { EditUserComponent } from './localstorage/edit-user/edit-user.component';


const routes: Routes = [
  {path:'', component:LocalStorageComponent},
  {path:'crud', component:CrudOpsComponent},
  {path:'nested', component:NestedRouteComponent, canActivate:[AuthGuard],
  children:[
    {path:':id', component:ProductDetailsComponent}
  ]
},
{path:'lifecyclehooks', component:NoteListComponent},
{path:'posts', component:DummyPostComponent},
{path:'product', component:ProductCategoryComponent,
children:[
  {path:':productCategory', component:ProductListComponent}
]},
{path:'localstorage', component:LocalStorageComponent,
children:[
  {path:'',component:AllUsersComponent},
  {path:'students', component:AllUsersComponent},
  {path:'createStudent', component:CreateUserComponent},
  {path:'edit/:id', component:EditUserComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
