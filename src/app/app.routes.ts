import { Routes } from '@angular/router';

// Componentes que se usarán como páginas dentro de la app
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Inicio' },
    },
    // {
    //     path: '**',
    //     component: PageNotFoundComponent,
    //     data: { title: 'Oops! Página no encontrada' },
    // },
];
