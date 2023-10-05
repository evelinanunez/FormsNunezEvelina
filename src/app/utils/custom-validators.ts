import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function noEvelinaValidators(control : AbstractControl): ValidationErrors | null{

  if (typeof control.value === 'string' &&
    control.value.toLowerCase() == 'evelina'){
    return {
      noEvelina :true,
    };
  }
  return null;
}

export function menorDeEdad(control : AbstractControl): ValidationErrors | null{

  if (control.value < 18){
    return {
      menorDeEdad :true,
    };
  }
  return null;
}


export function elDniDebeSerNumerico (control :AbstractControl) : ValidationErrors | null{
  if(isNaN(control.value) ){
    return {
      noEsUnNumero: true,
    };
  }
  return null;
}

export function validaLargoDni ( control : AbstractControl) : ValidationErrors | null{
   if( control.value.length > 11){
    return {
      largoDniIncorrecto: true,
    }
   }
   return null;
}




