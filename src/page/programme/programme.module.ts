import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { programmeRoutes } from './programme.routes'


import { ProgrammeComponent } from './programme.component';

@NgModule({
    declarations: [
        ProgrammeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(programmeRoutes)
    ],
    providers: []
})
export class ProgrammeModule { }