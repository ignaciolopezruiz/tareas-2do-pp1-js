const API_URL = "http://127.0.0.1:8000/articulos/"

async function obtenerArticulos() {
  try {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();

    document.getElementById("pantalla").textContent = JSON.stringify(datos, null, 2);
  } catch (error) {
    console.error("Error al obtener artículos:", error);
  }
}

async function crearArticulo(nuevoArticulo) {
  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoArticulo)
    });

    const datos = await respuesta.json();
    console.log("respuesta POST: ", datos)

    obtenerArticulos()

  } catch (error) {
    console.error("Error al crear artículo:", error);
  }
}

const formularioCrear = document.getElementById("form-crear");

formularioCrear.addEventListener("submit", (e) => {
  e.preventDefault();


  const datosFormulario = {
    nombre: document.getElementById("nombre").value,
    precio: parseFloat(document.getElementById("precio").value),
    categoria: document.getElementById("categoria").value
  }
  crearArticulo(datosFormulario)
})

async function editarArticulo(nuevoArticulo, id) {
  try {

    const respuesta = await fetch(`${API_URL}${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoArticulo)
    });

    const datos = await respuesta.json();
    console.log("respuesta PUT: ", datos)

    obtenerArticulos()

  } catch (error) {
    console.error("Error al editar artículo:", error);
  }
}

async function borrarArticulo(id) {
  try {
    const respuesta = await fetch(`${API_URL}${id}`, {
      method: "DELETE"
    });

    const datos = await respuesta.json();
    console.log("respuesta DELETE: ", datos)

    obtenerArticulos()
    quitarFavorito(parseInt(id))

  } catch (error) {
    console.error("Error al borrar artículo:", error);
  }
}


async function buscarPorId() {
  const id = document.getElementById("buscar-id").value;
  if (!id) { alert("Por favor ingresa un ID"); return; }

  try {
    const respuesta = await fetch(`${API_URL}${id}`);

    if (!respuesta.ok) {
      const error = await respuesta.json();
      alert(error.detail || "Artículo no encontrado");
      return;
    }

    const articulo = await respuesta.json();

    document.getElementById("edit-id").value = articulo.id;
    document.getElementById("edit-nombre").value = articulo.nombre;
    document.getElementById("edit-precio").value = articulo.precio;
    document.getElementById("edit-categoria").value = articulo.categoria;

    document.getElementById("pantalla").textContent = JSON.stringify(articulo, null, 2);

  } catch (error) {
    console.error("Error al buscar artículo por ID:", error);
  }
}


function borrarDesdeBusqueda() {
  const id = document.getElementById("buscar-id").value;
  if (!id) { alert("Por favor ingresa un ID para borrar"); return; }

  if (confirm(`¿Estás seguro de que quieres borrar el artículo con ID ${id}?`)) {
    borrarArticulo(id)
  }
}


const formularioEditar = document.getElementById("form-editar");

formularioEditar.addEventListener("submit", (e) => {
  e.preventDefault()

  const id = parseInt(document.getElementById("edit-id").value);

  const datosFormulario = {
    nombre: document.getElementById("edit-nombre").value,
    precio: parseFloat(document.getElementById("edit-precio").value),
    categoria: document.getElementById("edit-categoria").value
  }

  editarArticulo(datosFormulario, id)

})



const FAVORITOS_KEY = "favoritos_articulos";

function getFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITOS_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function guardarFavoritos(lista) {
  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(lista));
}

function esFavorito(id) {
  return getFavoritos().some((articulo) => articulo.id === id);
}


function agregarFavorito(articulo) {
  const favoritos = getFavoritos();
  if (!esFavorito(articulo.id)) {
    favoritos.push(articulo);
    guardarFavoritos(favoritos);
    renderFavoritos();
  }
}

function quitarFavorito(id) {
  guardarFavoritos(getFavoritos().filter((articulo) => articulo.id !== id));
  renderFavoritos();
}


function agregarBusquedaAFavoritos() {
  const id = parseInt(document.getElementById("edit-id").value);
  if (!id) { alert("Primero buscá un artículo por ID"); return; }

  const articulo = {
    id: id,
    nombre: document.getElementById("edit-nombre").value,
    precio: parseFloat(document.getElementById("edit-precio").value),
    categoria: document.getElementById("edit-categoria").value
  };
  agregarFavorito(articulo);
}


function seleccionarFavorito(id) {
  document.getElementById("buscar-id").value = id;
  buscarPorId();
}

function renderFavoritos() {
  const contenedor = document.getElementById("lista-favoritos");
  const favoritos = getFavoritos();

  if (favoritos.length === 0) {
    contenedor.innerHTML = `<p class="text-sm text-gray-400">Todavía no agregaste favoritos.</p>`;
    return;
  }

  contenedor.innerHTML = favoritos.map((articulo) => `
    <div class="flex justify-between items-center border p-2 rounded">
      <div>
        <span class="font-semibold">#${articulo.id} - ${articulo.nombre}</span>
        <span class="text-sm text-gray-500"> | $${Number(articulo.precio).toFixed(2)} | ${articulo.categoria}</span>
      </div>
      <div class="flex gap-2">
        <button onclick="seleccionarFavorito(${articulo.id})"
          class="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Ver</button>
        <button onclick="quitarFavorito(${articulo.id})"
          class="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Quitar</button>
      </div>
    </div>
  `).join("");
}


renderFavoritos();