
export function PasswordGenerator(): string{
    const psswd: string = ""
    const specialChar = /[^A-Za-z0-9]/;
    const numbers = /[0-9]/;
    const capitalLetter = /[A-Z]/;
    const smalllLetter = /[a-z]/;
    
    for (let i = 0; i < 11; i++){
        const ind: number = 
        Math.floor(Math.random() * 24);
        const result: number = capitalLetter[ind]; 
    }
    
    
    return psswd
}