const section = document.getElementById('card');

productos.forEach((producto) => {

    let div = document.createElement('div');
    div.classList.add('row','py-3','mx-1','justify-content-center');

    div.innerHTML = `
    <div class="card col-sm-12 col-md-6 col-lg-4 mb-2 me-2" style="width:23rem">
        <img src="${producto.img}" class="mt-2 w-100 img-card" alt="producto 1 poncho hombre color azul talle L ">
        <div class="card-body">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-text">${producto.text}
            <br>${producto.talle}</p>
            <a href="404.html" class="btn btn-color w-100">Añadir al Carrito</a>
        </div>
    </div>
    `;

   section .appendChild(div);
});

let nombre = prompt('Ingrese su nombre :');
let titulo = document.getElementById("titulo");
titulo.innerHTML =`
<h2 class = "text-center"> Bienvenido ${nombre},  que disfrutes tu estancia en esta página ! </h2> `;


