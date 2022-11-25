// ALGO 1

// Renvoie un mot écrit à l'envers
function inverser(mot) {
    var motInverse = "";
 
  // ajouter chaque lettre au début du mot inversé
    for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = mot[i] + motInverse;
    }
 
    return motInverse;
}

console.log(motInverseinevrser('Appuyer sur ON'));






