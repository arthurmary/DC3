/**ALGO 4
 * 
 * @return 
 */
function SumNumberBefore() {

  const startingNumber = Number(prompt("Saisissez un nombre de départ", 10));

  if (startingNumber <= 0) {
    console.log(0);
    return 0;
  }
 
   let startSum = 0;

  for (let index = 0; index <= startingNumber; index++) {
    startSum += index
  }

  console.log(startSum);
  return startSum;

}

SumNumberBefore()