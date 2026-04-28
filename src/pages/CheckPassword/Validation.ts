export function validation(password: string) : number{
    let nota = 0
    const specialChar = /[^A-Za-z0-9]/;
    const numbers = /[0-9]/;
    const capitalLetter = /[A-Z]/;
    const smalllLetter = /[a-z]/;

    if (password.length >= 10){
        nota += 1
    }
    if (numbers.test(password)){
        nota += 1
    }

    if (capitalLetter.test(password)) {
        nota += 1;
    }

    if (specialChar.test(password)) {
        nota += 1;
    }

    if (smalllLetter.test(password)) {
        nota += 1;
    }
    
    return nota
}