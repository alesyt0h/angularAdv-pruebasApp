import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {

        // En las pruebas unitarias creariamos la instancia de MedicoComponente, pero en las integradas no se hace así
        // 
        // component = new MedicoComponent();

        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ], // En el caso de que el MedicoComponent requiriese un servicio iria en providers
            imports: [ HttpClientModule ], // O si usara otro tipo de importaciones como otros módulos iria en imports
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {

        const nombre = 'Juan';
        const resp = component.saludarMedico(nombre);

        expect(resp).toContain(nombre);
    });

});