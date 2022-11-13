/**
 * 
 * @param {String} givenString - une ou des chaîne(s)  de caractères
 * @returns new String - la ou les nouvelle(s) chaîne(s) de caractères obtenue(s) 
 */
function ReverseGIvenString(givenString) {
    // je déclare la variable qui va contenir les nouvelles données obtenues. 
    let newString = "";
    if ((givenString.toString().split(' ')).length > 1) {
        newString = givenString.split(" ").reverse().join(" ");
        return newString;
    }
     newString =  givenString.split("").reverse().join("");
    return newString
}

console.log(ReverseGIvenString("hello"));

