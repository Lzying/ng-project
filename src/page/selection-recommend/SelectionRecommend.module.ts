import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { selectionRecommendRoutes } from './SelectionRecommend.routes';

import { SelectionRecommendComponent } from './SelectionRecommend.component';

@NgModule({
    declarations: [
        SelectionRecommendComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(selectionRecommendRoutes)
    ],
    providers: []
})
export class SelectionRecommendModule { }
