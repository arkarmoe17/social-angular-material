import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createMobileNumberValidator() : ValidatorFn {

    var prefix9: string[] = [
        "25", "26", "34", "40", "42", "44", "45", "46", "48",
        "65", "66", "67", "68", "69", "75", "76", "77", "78", 
        "79", "88", "89", "94", "95", "96", "97", "98", "99"
    ];
    
    var prefix8: string[] = [
        "22", "30", "31", "33", "34", "35", "36", "37", 
        "38", "39", "41", "43", "47", "49", "73", "91"
    ];
    
    var prefix7: string[] = [
        "20", "21", "22", "23", "24", "50", "51", "52", "53", 
        "54", "55", "56", "81", "83", "84", "85", "86", "87"
    ];
    
    var prefix6: string[] = [
        "70", "71"
    ];

    return (control: AbstractControl): ValidationErrors | null => {
        var mobile = control.value;
        console.log();

        if(!mobile) {
            return null;
        }
            
        var isPrefix = false;
        if(mobile.length == 9) {
            const prefix = mobile.substring(0,2);
            isPrefix = prefix9.includes(prefix);
        }

        if(mobile.length == 8) {
            const prefix = mobile.substring(0,2);
            isPrefix = prefix8.includes(prefix);
        }

        if(mobile.length == 7) {
            const prefix = mobile.substring(0,2);
            isPrefix = prefix7.includes(prefix);
        }

        if(mobile.length == 6) {
            const prefix = mobile.substring(0,2);
            isPrefix = prefix6.includes(prefix);
        }
        
        
        const mobileValid = isPrefix;
        
        return !mobileValid ? {mobileInvalid:true}: null;
    }
}
