//carrito de compras (libros)

    let array = []
    function arrayAcum(array){
        let acum = "";
    for (i=0; i<array.length; i++){
        acum += `
        nombre: ${array[i].nombre} autor: ${array[i].autor} costo: ${array[i].costo}`
    }
    return acum;
}
    
function arraylibro() {
let nombre = prompt(`INGRESE EL NOMBRE DEL LIBRO`)
let autor = prompt(`INGRESE EL AUTOR DEL LIBRO`)
let costo = parseFloat(prompt(`INGRESE EL COSTO DEL LIBRO`))

    let libro = {
        nombre: nombre,
        autor: autor,
        costo: costo,
    }
        if(nombre != "" && autor != "" && Number.isNaN(costo)){
           array.push(libro);
           alert(arrayAcum(array))
           arraylibro();
        }
    
}
arraylibro();