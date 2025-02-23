import { Routes } from '@angular/router';
import { ComplaintComponent } from './component/complaint/complaint.component';

export const routes: Routes = [
    {path:':id',component:ComplaintComponent},
];
