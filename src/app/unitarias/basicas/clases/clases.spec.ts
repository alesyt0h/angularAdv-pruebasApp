import { Jugador } from './clases';

describe('Pruebas de clases', () => {

    // const jugador = new Jugador();
    let jugador = new Jugador();

    beforeAll( () => {
        // console.log('beforeAll');
    });

    beforeEach( () => {
        // console.log('beforeEach');
        // jugador.hp = 100;
        jugador = new Jugador();
    });

    afterAll( () => {
        // console.log('afterAll');
    });

    afterEach( () => {
        // console.log('afterEach');
        jugador.hp = 100;
    });

    it('Debe de retornar 80 de HP, si recibe 20 de daño', () => {

        // const jugador = new Jugador();
        const resp = jugador.recibeDmg(20);
        
        expect(resp).toBe(80);

    });

    it('Debe de retornar 50 de HP, si recibe 50 de daño', () => {
        
        // console.log('Esta prueba va a fallar')

        // const jugador = new Jugador();
        const resp = jugador.recibeDmg(50);

        expect(resp).toBe(50);

    });

    it('Debe de retornar 0 de HP, si recibe 100 de daño o más', () => {
        
        // const jugador = new Jugador();
        const resp = jugador.recibeDmg(100);

        expect(resp).toBe(0);

    });

})