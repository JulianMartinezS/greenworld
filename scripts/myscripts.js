
// function lafuncion () {

// let flores = [
//     ' Tulipan ',' Margarita ',' Dalia ',' Lirio '
// ]

// console.log(flores)

// const arboles = ['Cedro','Pino','Acacia','Roble']

// let favoritos = prompt ("¿Que flores quieres agregarle a tu jardín?")

// flores.push (favoritos)

// alert ("Tus flores elegidas hasta el momento son: " + flores)

// lafuncion ()


// }

// lafuncion ()


let boton = document.getElementById("EventBtn")
boton.addEventListener("click", multiplicar)


function multiplicar() {
    
    const superficiePers = parseInt(document.getElementById('valor1').value)

    const tipoDeServicio = parseInt(document.getElementById('valor2').value)
    
    document.getElementById('result').innerHTML = (superficiePers*tipoDeServicio); 

    console.log(superficiePers, tipoDeServicio)

}


Toastify({
    text: "Nuestro sitio representa precios de servicios predeterminados, para obtener un servicio personalizado cliquea aquí !",
    duration: 6000,
    destination: "./contacto.html",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
}).showToast();




const tabla = document.querySelector('#lista-servicios')

function cargarServicios (){
    fetch('servicios.json')
    .then(respuesta => respuesta.json())
    .then(servicios => {
        servicios.forEach(servicios => {
            const row = document.createElement('tr');
            row.innerHTML += `
            <td>${servicio.tamanio}</td>
            <td>${servicio.comentario}</td>
            <td>${servicio.corte}</td>
            <td>${servicio.poda}</td>
            <td>${servicio.disenio}</td>
            <td>${servicio.mantenimiento}</td>
            `;
            tabla.appendChild(row);
        });
    })
    .catch(error => console.log("Hubo un error :" + error.mensaje))
}

cargarServicios();












// const app ={};
// const myCallback = data => {
//     console.log(data)
//     app.servicios=data;
//     let nuevohtml = ""
//     nuevohtml+="<h3>Nuestros servicios</h3>"
//     nuevohtml+=""
//     document.getElementById("bringServices").innerHTML = nuevohtml;
// }
