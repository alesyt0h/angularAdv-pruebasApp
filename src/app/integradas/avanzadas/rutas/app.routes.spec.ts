import { rutas } from '../../avanzadas/rutas/app.routes';
import { MedicoComponent } from '../../basicas/medico/medico.component';
describe('Rutas principales', () => {

    it('Debe de existir la ruta /medico/:id', () => {
        expect(rutas).toContain(
            { path: 'medico/:id', component: MedicoComponent}
        )
    });

});