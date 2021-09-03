import { Routes } from '@angular/router';
import { HospitalComponent } from '../../basicas/hospital/hospital.component';
import { MedicoComponent } from '../../basicas/medico/medico.component';
import { IncrementadorComponent } from '../../intermedias/incrementador/incrementador.component';

export const rutas: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent },

]
