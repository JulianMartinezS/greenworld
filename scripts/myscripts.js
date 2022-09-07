
let serviciosChicos = [
    {servicio: "Corte cesped" , precio: 15},
    {servicio: "Poda parque" , precio: 30 },
    {servicio: "Diseño jardin" , precio: 25 },
    {servicio: "Mantenimiento general" , precio: 40 },
]

let serviciosMedianos = [
    {servicio: "Corte cesped" , precio: 12},
    {servicio: "Poda parque" , precio: 25 },
    {servicio: "Diseño jardin" , precio: 22 },
    {servicio: "Mantenimiento general" , precio: 33 },
]

let serviciosGrandes = [
    {servicio: "Corte cesped" , precio: 10},
    {servicio: "Poda parque" , precio: 21 },
    {servicio: "Diseño jardin" , precio: 18 },
    {servicio: "Mantenimiento general" , precio: 29 },
]

let serviciosExtraGrande = [
    {servicio: "Corte cesped" , precio: 7 },
    {servicio: "Poda parque" , precio: 18 },
    {servicio: "Diseño jardin" , precio: 15 },
    {servicio: "Mantenimiento general" , precio: 27 },
]

let serviciosGenerales = [
    {serviciosChicos},
    {serviciosMedianos},
    {serviciosGrandes},
    {serviciosExtraGrande}
]

function crearPresupuesto () {

    const presupuestoPers = prompt ("Ingresa el área de tu parque en metros cuadrados. Ej: 42")
    
    let respuestaServicios = serviciosGenerales.splice ()
    
    
}



// let productoSugerido

// if (presupuestoPers <5) {productoSugerido=serviciosChicos} 
// else if (presupuestoPers >5 && presupuestoPers <15 ) {productoSugerido=serviciosMedianos} 
// else if (presupuestoPers >15 && presupuestoPers <50 ) {productoSugerido=serviciosGrandes} 
// else {productoSugerido=serviciosExtraGrande}






















// function  prompt ('¿Cuantos metros cuadrados tiene tu jardin/parque?')

// if (prompt < 5) = alert ('Tu parque califica como - Chico -')





















// function multiplicar() {
    
//     const x = parseInt(document.getElementById('valor1').value)

//     const y = parseInt(document.getElementById('valor2').value)
    
//     document.getElementById('result').innerHTML = (x*y);

//     console.log(x,y)

// }
