import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { programmeRoutes } from './programme.routes'


import { ProgrammeComponent } from './programme.component';

@NgModule({
    declarations: [
        ProgrammeComponent
    ],
    imports: [
        RouterModule.forChild(programmeRoutes)
    ],
    providers: []
})
export class ProgrammeModule { }