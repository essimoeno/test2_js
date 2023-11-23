// Création d'un tableau JavaScript 2D appelé "to_verify" pour stocker les données à vérifier.
// Il a 9 lignes et 9 colonnes.
var to_verify = new Array(9);
for (var i = 0; i < 9; i++) {
    to_verify[i] = new Array(9);
}

// Función "copiarTabla" para copiar los datos desde la fuente hacia el destino.
// Toma como entrada una tabla fuente (array 1D) y una tabla destino (array 2D).
function F11(sourceTable, targetTable) { //copyTable
    for (var i = 0; i < 9; i++) {
        // Sépare la chaîne de caractères en chiffres en utilisant l'espace comme séparateur.
        var row = sourceTable[i].split(" ");
        for (var j = 0; j < 9; j++) {
            targetTable[i][j] = parseInt(row[j]);
        }
    }
}

// Función "mostrarTabla" para mostrar el contenido de la tabla en forma de una tabla HTML.
// Toma como entrada una tabla que se va a mostrar.
function F12(table) { //displayTable
    var tableHTML = '<table border="1">';
    for (var i = 0; i < 9; i++) {
        tableHTML += '<tr>';
        for (var j = 0; j < 9; j++) {
            // Crée une cellule de tableau pour chaque élément de la table et l'ajoute au HTML.
            tableHTML += '<td class="sudoku-cell">' + table[i][j] + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    
    // Affiche le tableau HTML généré dans l'élément avec l'ID "output" de la page.
    outputDiv.innerHTML += tableHTML;
}
