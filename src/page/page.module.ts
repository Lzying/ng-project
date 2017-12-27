
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { pageRoutes } from './page.routes';
import { CarouselModule } from 'ngx-bootstrap';



import { PageComponent } from './page.component';


@NgModule({
    declarations: [
        PageComponent,
    ],
    imports: [
        CarouselModule,
        RouterModule.forRoot(pageRoutes)
    ],
    providers: []
})
export class PageModule { }
