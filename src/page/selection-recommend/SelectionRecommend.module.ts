import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { selectionRecommendRoutes } from './SelectionRecommend.routes'


import { SelectionRecommendComponent } from './SelectionRecommend.component';

@NgModule({
    declarations: [
        SelectionRecommendComponent
    ],
    imports: [
        RouterModule.forChild(selectionRecommendRoutes)
    ],
    providers: []
})
export class SelectionRecommendModule { }
