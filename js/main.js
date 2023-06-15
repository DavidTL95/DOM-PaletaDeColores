//Crear una web que genere paletas de colores aleatorias, sin utilizar ninguna fuente externa.


let boton = document.getElementById("generarPaleta")
let contenedor = document.getElementById("contenedorColores")

const numero = (limite) => {

    return Math.floor(Math.random() * limite);

};
  
const RandomColor = () => {

    const h = numero(360);
    const s = numero(100);
    const l = numero(100);
  
    return `hsl(${h}deg, ${s}%, ${l}%)`;
};

boton.addEventListener('click', () => {
    contenedor.replaceChildren()

    const color1 = document.createElement("div")
    const color2 = document.createElement("div")
    const color3 = document.createElement("div")
    const color4 = document.createElement("div")

    contenedor.appendChild(color1);
    color1.classList.add("color");
    color1.style.backgroundColor = RandomColor()

    contenedor.appendChild(color2);
    color2.classList.add("color");
    color2.style.backgroundColor = RandomColor()

    contenedor.appendChild(color3);
    color3.classList.add("color");
    color3.style.backgroundColor = RandomColor()

    contenedor.appendChild(color4);
    color4.classList.add("color");
    color4.style.backgroundColor = RandomColor()
})

