
let mensajeInput = document.getElementById("message");
let offset = document.getElementById("key");
let buttonReset = document.getElementById("reset");
let mensajeOutput = document.getElementById("aparece");
let buttonCifrar = document.getElementById("cifrar");
let buttonDescifrar = document.getElementById ("descifrar")


buttonReset.addEventListener("click", () => {
mensajeOutput.innerHTML = "  ", mensajeInput.innerHTML = "   "});

buttonCifrar.addEventListener("click", () => {

let n = parseInt(offset.value);

let string = mensajeInput.value;

let cifrado = cipher.encode (n , string)

mensajeOutput.innerHTML = cifrado;
});

buttonDescifrar.addEventListener("click", () => {

    let n = parseInt(offset.value);
    
    let string = mensajeInput.value;
    
    let cifrado = cipher.decode (n , string)
    
    mensajeOutput.innerHTML = cifrado;
    });
  