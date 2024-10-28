import { Routes } from '@angular/router';
import { ConverterComponent } from './domains/converter/pages/converter/converter.component';
import { HistoryComponent } from './domains/history/pages/history/history.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/converter', 
        pathMatch: 'full' 
    },
    {
        path: 'converter',
        component: ConverterComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    }
];
