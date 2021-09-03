import { usuarioIngresado } from './booleanos';
describe('Pruebas de Booleanos', () => {
    it('Debe de retornar true', () => {

        const resp = usuarioIngresado();

        expect(resp).toBe(true);
        expect(resp).toBeTruthy();
        
        // Para false:
        //
        // expect(resp).toBeFalsy();
        // expect(resp).not.toBeTruthy();
    })
})