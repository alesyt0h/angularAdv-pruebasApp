import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

class FakeRouter {
  navigate(params: any){}
}

class FakeActivatedRouter {
  // params: Observable<any> = EMPTY;

  private _subject = new Subject();

  push(valor: any){
    this._subject.next(valor);
  }

  get params(){
    return this._subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRouter}
      ]
      // imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico','123'])
  });

  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRouter = TestBed.get(ActivatedRoute);

    activatedRoute.push({id: 'nuevo'});
    
    expect(component.id).toBe('nuevo');
  });
});
