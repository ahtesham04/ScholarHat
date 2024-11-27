// import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudOpsComponent } from './crud-ops/crud-ops.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NestedRouteComponent } from './nested-route/nested-route.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateUserComponent } from './localstorage/create-user/create-user.component';
import { EditUserComponent } from './localstorage/edit-user/edit-user.component';
import { AllUsersComponent } from './localstorage/all-users/all-users.component';
import { LocalStorageComponent } from './localstorage/local-storage/local-storage.component';
import { SearchPipePipe } from './customepipe/search-pipe.pipe';
import { DummyPostComponent } from './dummy-post/dummy-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudOpsComponent,
    NavbarComponent,
    NestedRouteComponent,
    ProductDetailsComponent,
    NoteListComponent,
    NoteListItemComponent,
    ProductCategoryComponent,
    ProductListComponent,
    CreateUserComponent,
    EditUserComponent,
    AllUsersComponent,
    LocalStorageComponent,
    SearchPipePipe,
    DummyPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgxPaginationModule``
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
