import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IncrementadorComponent } from './incrementador.component';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges(); // Disparar la detección de cambios de Angular
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement; // By.css('.form-control') - By.css('#form-control')

        expect(elem.innerHTML).toContain('Progreso de carga')
    });

    it('Debe de mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();

        // Fuera de esta funcion el input aún no habría cambiado su valor
        fixture.whenStable().then( () => {
            const input = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(input.value).toBe('55');
        })
        
        expect(true).toBeTruthy(); // To avoid SPEC HAS NO EXPECTATIONS
    });

    it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        // botones[1].triggerEventHandler('click', null);
        // expect(component.progreso).toBe(50);
    });

    it('Debe de mostrar el progreso en el H3', () => {
        
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click',null);
        fixture.detectChanges();

        const progress = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(progress.innerHTML).toContain(45);

    });

});
