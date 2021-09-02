import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormularioRegister {

    form: FormGroup;

    constructor(private _fB: FormBuilder){
        this.form = _fB.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

}