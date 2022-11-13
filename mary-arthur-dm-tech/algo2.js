/**
 * 
 * @param {Array} array 
 * @returns Integer - the larger integer of the array
 */
function RetrieveMax(array) {
    const toArray = Array.from(array);
    //console.log(toArray);
    return Math.max(...toArray);

}

console.log(RetrieveMax([4, 7, 2]));
