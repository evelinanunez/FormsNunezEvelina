import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { elDniDebeSerNumerico, menorDeEdad, noEvelinaValidators, validaLargoDni } from '../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms-alumno',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  alumnoForm : FormGroup;
  constructor( private formBuilder : FormBuilder){
    this.alumnoForm = this.formBuilder.group({
      /**
       * Forma de hacerlo mas corto, con un array
       * Ej: nombreAlumno : [ valorPorDefecto]
       */
      nombreAlumno :['',[Validators.required, Validators.minLength(7), noEvelinaValidators]],
      apellidoAlumno :['',[Validators.required,Validators.minLength(5)]],
      dni: ['',[Validators.required,elDniDebeSerNumerico, validaLargoDni]],
      fechaNacimiento: ['',[Validators.required]],
      edad: ['', [Validators.required,menorDeEdad]],
      emailform:['',[Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      genero: ['',[Validators.required]],
      direccion : ['',[Validators.required]],
      telefono : ['',[Validators.required]],
      /* nombreAlumno : this.formBuilder.control('Evelina'),
      apellidoAlumno :this.formBuilder.control('Nuñez'),
      fechaNacimiento: this.formBuilder.control('1989-11-28'),
      genero: this.formBuilder.control(''),
      direccion : this.formBuilder.control(''),
      telefono : this.formBuilder.control('1223333'), */
    });


  }
  /**
   * Metodo que se ejecuta cuando se acciona el ngSubmit del formulario
   */
  onSubmit(){

/*     console.log( this.alumnoForm.valid);
    console.log(this.alumnoForm); */

     console.log(this.alumnoForm.value);
    // console.log(this.alumnoForm.controls['nombreAlumno'].value);

  }

  get dniControl() {
    return this.alumnoForm.controls['dni'];
  }

  get edadAlumnoControl(){
    return this.alumnoForm.controls['edad']
  }
  get nombreAlumnoControl(){
    return this.alumnoForm.controls['nombreAlumno'];
  }

  get apellidoAlumnoControl(){
    return this.alumnoForm.controls['apellidoAlumno'];
  }


  get fechaNacimientoControl(){
    return this.alumnoForm.controls['fechaNacimiento'];
  }


  get emailformControl(){
    return this.alumnoForm.controls['emailform'];
  }

  get generoControl(){
    return this.alumnoForm.controls['genero'];
  }

  get direccionControl(){
    return this.alumnoForm.controls['direccion'];
  }

  get telefonoControl(){
    return this.alumnoForm.controls['telefono'];
  }

  /**
   * Forma de acceder al objeto controls.
   *   console.log( this.alumnoForm.valid);
       console.log(this.alumnoForm);
       console.log(this.alumnoForm.value);
       console.log(this.alumnoForm.controls['nombreAlumno'].value);
   *
   */
  /**
   * Validaciones: clase Validators
   * this.alumnoForm.valid nos devuelve un true o false,
   * dependiendo el estado del formulario
   */
}

