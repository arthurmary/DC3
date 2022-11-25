/**ALGO 2
 * 
 * @param {Array} array 
 * @returns 
 */
function RetrieveMax(array) {
    const toArray = Array.from(array);
    
    return Math.max(...toArray);

}

console.log(RetrieveMax([4, 7, 2]));
