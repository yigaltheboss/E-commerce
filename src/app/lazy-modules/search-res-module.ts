import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { PipesModule } from "../pipes.module";

import { SearchResultsComponent } from "../search-results/search-results.component";


const routes: Routes = [{
    path: '', component: SearchResultsComponent,
}
]

@NgModule({
    declarations: [
       SearchResultsComponent,
      
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class SarchResModule { }
