import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { CustomerService } from "../../_services/customer.service";

export function mobileExistValidators(customer: CustomerService) : AsyncValidatorFn {
    return (control: AbstractControl) => {
        return customer.findUserByMobile(control.value)
        .pipe(
            map(response => response ? {mobileExist:true}: null)
        );
    }
}