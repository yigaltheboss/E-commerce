import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { PipesModule } from "../pipes.module";

import { SiteSettingsComponent } from "../site-settings/site-settings.component";
import { AddProductComponent } from "../add-product/add-product.component";
import { ManageUsersComponent } from "../manage-users/manage-users.component";
import { AdminComponent } from "../admin/admin.component";

import { AdminFunctionsService } from "../admin-functions.service";

const routes: Routes = [{
    path: '', component: AdminComponent,
    children: [
        {
            path: 'add',
            component: AddProductComponent
        },
        {
            path: 'manageusers',
            component: ManageUsersComponent
        },
        {
            path: 'sitesettings',
            component: SiteSettingsComponent
        },
        { path: '', redirectTo: '/admin/add', pathMatch: 'full' },
        { path: '**', redirectTo: 'admin/add', pathMatch: 'full' }]
}]

@NgModule({
    declarations: [
        AdminComponent,
        SiteSettingsComponent,
        AddProductComponent,
        ManageUsersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        RouterModule.forChild(routes)
    ],
    providers: [AdminFunctionsService]
})
export class AdminModule { }
