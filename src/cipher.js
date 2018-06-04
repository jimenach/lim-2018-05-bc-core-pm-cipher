window.cipher = {

  encode : function (offset, string){

      let salida = ""//variable para la salida de la variable encriptada

      for (let i=0; i < string.length; i++) { 

      let codeado = String.fromCharCode((string.charCodeAt(i) - 65 + offset)%26 + 65);

      salida += codeado
  }
return salida;

},

decode : function (offset, string){

  let salida = ""//variable para la salida de la variable encriptada

  for (let i=0; i < string.length; i++) { 

  let codeado = String.fromCharCode((string.charCodeAt(i) - 65 - offset)%26 + 65);

  salida += codeado
}
return salida;
}
}
