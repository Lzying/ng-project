import { PageComponent } from './page.component';

export const pageRoutes = [
    {
        path: 'page',
        component: PageComponent,
        children: [
            { path: '', redirectTo: 'selectionrecommend', pathMatch: 'full' },
            { path: 'selectionrecommend', loadChildren: 'page/selection-recommend/SelectionRecommend.module#SelectionRecommendModule' },
            { path: 'programme', loadChildren: 'page/programme/programme.module#ProgrammeModule' },
            { path: '**', redirectTo: 'selectionrecommend' }
        ]
        
    }
];
