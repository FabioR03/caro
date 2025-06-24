const caro = prompt("Escribe un numero de 1 a 5, cada uno te dara un mensaje secreto: \n1.😍 \n2.❤️\n3.😙 \n4.💘 \n5.💕")

switch (caro){

    case "1":
        alert ("Contigo, todo siempre es más bonito😍.")
    break
    case "2":
        alert ("Tu sonrisa es la mas hermosa del mundo❤️.")
    break
    case "3":
        alert ("Me gusta cómo haces que lo simple se sienta especial😙.")
    break
    case "4":
        alert ("Tu forma de ser me tiene completamente encantado💘.")
    break
    case "5":
        alert ("Eres mi parte favorita del día, incluso sin verte💕.")
    break

    default:
    alert("Operación no válida. Por favor, ingrese un número entre 1 y 5.")
}
