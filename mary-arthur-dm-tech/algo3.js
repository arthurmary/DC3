/**
 * @return Integer - next 10 integers after 
 */
 function NextTenNumber() {

    const startingNumber = Number(prompt("Saisissez un nombre de départ", 10));
   
    let startingNumberPlusTen = startingNumber +11;
  //  let newArray = [];
    for (let index =  startingNumber+1; index < startingNumberPlusTen; index++) {
   // newArray.push(index)
    console.log(index);
    }

 /* newArray.forEach(number  =>{
    console.log(number);
  })*/

}

NextTenNumber()