import { mensaje } from './strings';
// describe('Pruebas de Strings');
// it('Debe de regresar un string');


describe('Pruebas de Strings', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Alejandro');

        // expect( (typeof resp) === 'string')
        expect(typeof resp).toBe('string')
    });
    
    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan'
        const resp = mensaje(nombre);

        expect(resp).toContain(nombre)
    });
});