
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { pageRoutes } from './page.routes';
import { CarouselModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common'; 



import { PageComponent } from './page.component';


@NgModule({
    declarations: [
        PageComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        RouterModule.forRoot(pageRoutes)
    ],
    providers: []
})
export class PageModule { }
