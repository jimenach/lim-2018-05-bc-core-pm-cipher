window.cipher = {

    encode : function (offset, string){

        let salida = ""//variable para la salida de la variable encriptada

        for (let i=0; i < string.length; i++) { 

        let letraAscci = string.charCodeAt(i);

        if(letraAscci>=65 && letraAscci<=90) {
            let codeado = String.fromCharCode((letraAscci - 65 + offset)%26 + 65);

            salida += codeado
        }

        else if(letraAscci>=97 && letraAscci<=122) {
            let codeado = String.fromCharCode((letraAscci - 97 + offset)%26 + 97);

            salida += codeado

        }

        else if (letraAscci === 32){
            salida += String.fromCharCode(32)
        }

        
    }
return salida;

},

decode : function (offset, string){

    let salida = ""//variable para la salida de la variable encriptada

    for (let i=0; i < string.length; i++) { 

        let letraAscci = string.charCodeAt(i);

        if(letraAscci>=65 && letraAscci<=90) {
            let codeado = String.fromCharCode((letraAscci + 65 - offset)%26 + 65);

            salida += codeado
        }

        else if(letraAscci>=97 && letraAscci<=122) {
            let codeado = String.fromCharCode((letraAscci - 97 - offset + 26 * 2)%26 + 97);

            salida += codeado

        }

        else if (letraAscci === 32){
            salida += String.fromCharCode(32)
        }
}
return salida;
}
}


