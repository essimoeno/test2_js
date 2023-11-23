/*1.Crea una nueva función "F31" que llame a la función anterior "F21" para cada línea de la tabla "to_check". 
Muestra un mensaje de error relevante en caso de una anomalía, indicando en particular el número de línea con 
error y los valores de las estaciones en esa línea. (ver pregunta n° 4 y ejemplo de la tabla de anomalías en el anexo)*/

//new fuction F31
function F31() {
    var msgHTML = "";
    for (var i = 0; i < array_number.length; i++) {
        var arrayNums = [];
        var linea = array_number[i].split(" ");

        for (var j = 0; j < array_number.length; j++) {
            var num = parseInt(linea[j]);

            if (!isNaN(num)) {
                arrayNums.push(num);
            } else {
                arrayNums.push(linea[j]);
            }

        }

        if (!F21(arrayNums)) {

            msgHTML += '</br><b class="errormsg">Line ' + i + ' NOT valid</b>';
            msgHTML += arrayNums;
        }


    }
    outputDiv3.innerHTML += msgHTML;
}


function F32() {
    var msgHTML = "";

    for (var i = 0; i < array_number.length; i++) {
        var arrayNums = [];

        for (var j = 0; j < array_number.length; j++) {
            var num = parseInt(array_number[j].split(" ")[i]);

            if (!isNaN(num)) {
                arrayNums.push(num);
            } else {
                arrayNums.push(array_number[j].split(" ")[i]);
            }
        }
        if (!F21(arrayNums)) {

            msgHTML += '</br><b class="errormsg">Column ' + i + ' NOT valid</b>';
            msgHTML += arrayNums;

        }
    }
    outputDiv3.innerHTML += msgHTML;
}

function F33() {
    var msgHTML = "";
    for (var i = 0; i < array_number.length; i += 3) {
        var arrayNums = [];
        for (var j = 0; j < array_number.length; j += 3) {
            for (var x = i; x < i + 3; x++) {
                var num = null;
                for (var y = j; y < j + 3; y++) {
                    num = parseInt(array_number[y].split(" ")[x]);
                    if (!isNaN(num)) {
                        arrayNums.push(num);
                    } else {
                        arrayNums.push(array_number[y].split(" ")[j]);
                    }
                }

            }

        }

        if (!F21(arrayNums)) {
            msgHTML += '</br><b class="errormsg">Section ' + i + ' NOT valid</b>';

            msgHTML += arrayNums;
        }
    }
    outputDiv3.innerHTML += msgHTML;

}