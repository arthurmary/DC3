/** ALGO 3
 * @return 
 */
 function NextTenNumber() {

    const startingNumber = Number(prompt("Saisissez un nombre de départ", 10));
   
    let startingNumberPlusTen = startingNumber +11;
  
    for (let index =  startingNumber+1; index < startingNumberPlusTen; index++) {
   
    console.log(index);
    }

 // console log= nombre

}

NextTenNumber()