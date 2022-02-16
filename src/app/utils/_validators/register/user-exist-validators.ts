import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { CustomerService } from "../../_services/customer.service";

export function userExistValidators(customer: CustomerService): AsyncValidatorFn {
    return (control:AbstractControl) => {
        return customer.findUserByEmail(control.value)
            .pipe(
                map(response => response ? {emailExist:true}: null)
            );
    }
}