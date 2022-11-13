/**
 * 
 * @param {Array} array 
 * @returns Array - Le tableau des nombres dans l'ordre croissant
 */
function SortArray(array) {
    // je transforme la valeur reçu en paramètre en un tableau JS
    const toArray = Array.from(array);
    // fonction JS pour trier le tableau, avec en paramètre la méthode de comparaison d'entier
   toArray.sort( (a, b) => {
        return a - b;
    });

   console.log(toArray);
   //je retourne le nouveau tableau obtenu
   return toArray

}
SortArray([101, 1001, 2]);

