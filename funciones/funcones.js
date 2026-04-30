const productos =[
    {
        id: 1,
        nombre: "mouse 6000 dpi",
        categoria: "perifericos",
        precio: 15000,
        coste: 10000,
        stock:18,
        imagen:"mouse.jpg",
        descripcion: "Maouse gamer con alta precision y diceño ergonomico.",
    },
    {
        id: 2,
        nombre: "teclado mecanico",
        categoria: "perifericos",
        precio: 25000,
        coste: 20000,
        stock:10,
        imagen:"teclado.jpg",
        descripcion: "Teclado mecanico con retroiluminacion RGB y switches de alta calidad.",
    },
    {
        id: 3,
        nombre: "monitor 24 pulgadas",
        categoria: "monitores",
        precio: 50000,
        coste: 40000,
        stock:5,
        imagen:"monitor.jpg",
        descripcion: "Monitor de 24 pulgadas con resolucion Full HD y tasa de refresco de 144Hz.",
    },
    {
        id: 4,
        nombre: "auriculares gaming",
        categoria: "perifericos",
        precio: 20000,
        coste: 10000,
        stock:12,
        imagen:"auriculares.jpg",
        descripcion: "Auriculares gaming con sonido envolvente y microfono con cancelacion de ruido.",
    },
    {
        id: 5,
        nombre: "silla gamer",
        categoria: "sillas",
        precio: 80000,
        coste: 100000,
        stock:3,
        imagen:"silla.jpg",
        descripcion: "Silla gamer con diseño ergonómico, soporte lumbar ajustable y reposabrazos 4D.",
    },
    {
        id: 6,
        nombre: "tarjeta grafica RTX 3080",
        categoria: "componentes",
        precio: 250000,
        coste: 200000,
        stock:2,
        imagen:"tarjeta.jpg",
        descripcion: "Tarjeta grafica de alta gama con rendimiento excepcional para juegos y tareas intensivas.",
    }
]
function calcularGnancia(producto){
    const ganancia = producto.precio - producto.coste;
    return ganancia;
}
const calcularGananciaArrow = (producto) => {
    return producto.precio - producto.coste
};

//esto es una funcion anonima, no tiene nombre y no se puede reutilizar, se ejecuta inmediatamente despues de ser definida
//console.log(calcularGnancia(productos[2]));
//console.log(calcularGananciaArrow(productos[2]));

const obtenerresumen = (producto) => {
    return `Nombre: ${producto.nombre}, categoria: ${producto.categoria}, precio: ${producto.precio}, stock: ${producto.stock}, ganancia: ${calcularGananciaArrow(producto)}`;
}
productos.forEach(producto => {
  //  console.log(obtenerresumen(producto));
})

//silmilar simplificar por ganancias
const clasificarProGanancia = (ganancia) => {
    if(ganancia > 5000){
        return "Alta";
    }else if(ganancia > 2000 && ganancia <= 5000){
        return "Media";
    }else{
        return "Baja";
    };
}

productos.forEach(producto => {
const ganancia = calcularGananciaArrow(producto);
//console.log(`${obtenerresumen(producto)} clasificacion de ganancia: ${clasificarProGanancia(ganancia)}`);
})

//operador ternario
const clasificarProGananciaTernario = (ganancia) => {
    return ganancia < 1500 
    ? "ganancia baja" 
    : ganancia <= 5000 
        ? "ganancia media" 
        : "ganancia alta";     //concicion resultado verdadero resultado si es falso
}
productos.forEach(producto => {
const ganancia = calcularGananciaArrow(producto);
//console.log(`${obtenerresumen(producto)} clasificacion de ganancia: ${clasificarProGananciaTernario(ganancia)}`);
})

const agruparPorCategoria = () => {
    const resultado = {};
    productos.forEach(producto => {
        if (!resultado[producto.categoria]) {
            resultado[producto.categoria] = {
                categoria: producto.categoria,
                cantidadProductos: 0,
                gananciaTotal: 0
            };
        }
    }
    resultado[producto.categoria].cantidadProductos++;
    resultado[producto.categoria].gananciatotal += calcularGananciaArrow(producto);
    return resultado;
    }
const resultados = agruparPorCategoria(productos)
console.log(resultados);