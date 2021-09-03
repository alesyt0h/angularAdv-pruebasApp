import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './unitarias/avanzadas/espias/medicos.component';
import { MedicoComponent } from './integradas/basicas/medico/medico.component';
import { HospitalComponent } from './integradas/basicas/hospital/hospital.component';
import { IncrementadorComponent } from './integradas/intermedias/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { rutas } from './integradas/avanzadas/rutas/app.routes';
import { NavbarComponent } from './integradas/avanzadas/navbar/navbar.component';
import { RouterMedicoComponent } from './integradas/avanzadas/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
