import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './unitarias/avanzadas/espias/medicos.component';
import { MedicoComponent } from './integradas/basicas/medico/medico.component';
import { HospitalComponent } from './integradas/basicas/hospital/hospital.component';
import { IncrementadorComponent } from './integradas/intermedias/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
