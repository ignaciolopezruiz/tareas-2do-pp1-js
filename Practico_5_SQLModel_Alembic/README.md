# Práctico 5 — FastAPI, SQLModel y Alembic

API de una mueblería que reemplaza los modelos y sesiones directos de SQLAlchemy por **SQLModel**, incorpora **Alembic** para administrar el esquema de la base de datos y relaciona muebles con categorías mediante una clave foránea.

## Requisitos de la consigna

- `requirements.txt` incluye `sqlmodel` y `alembic`.
- Los modelos persistentes están definidos con `SQLModel` en `src/models/`.
- `alembic/versions/0001_crear_categorias_y_muebles.py` es la migración inicial.
- `Mueble.categoria_id` referencia `categorias.id` mediante una Foreign Key.
- `MueblePublic` contiene el schema anidado `CategoriaPublic` en el campo `categoria`.
- La aplicación no usa `SQLAlchemy` directamente para definir modelos ni manejar sesiones. Alembic utiliza SQLAlchemy internamente para ejecutar migraciones, como corresponde a su funcionamiento.

## Estructura

```text
Practico_5_SQLModel_Alembic/
├── alembic.ini
├── alembic/
│   ├── env.py
│   └── versions/
│       └── 0001_crear_categorias_y_muebles.py
├── requirements.txt
└── src/
    ├── main.py
    ├── database.py
    ├── models/
    │   ├── categoria.py
    │   └── mueble.py
    ├── schemas/
    │   ├── categorias.py
    │   └── muebles.py
    └── routers/
        ├── categorias.py
        └── muebles.py
```

## Instalación en Windows (PowerShell)

Abrí la terminal en la carpeta raíz del proyecto. Creá y activá el entorno virtual:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

Si ya tenés un entorno virtual activado, no hace falta crearlo de nuevo.

## Crear la base de datos con Alembic

Desde la carpeta raíz del proyecto, ejecutá:

```powershell
alembic upgrade head
```

Esto ejecuta la migración inicial y crea las tablas `categorias` y `muebles`, además de la tabla de control `alembic_version`. No se usa `SQLModel.metadata.create_all()` para crear las tablas: el esquema se administra con migraciones.

Para consultar la revisión aplicada:

```powershell
alembic current
```

Para ver el historial:

```powershell
alembic history
```

## Ejecutar la API

```powershell
uvicorn src.main:app --reload
```

Abrí <http://127.0.0.1:8000/docs> para probar los endpoints.

## Cómo probar la relación y los schemas anidados

### 1. Crear una categoría

En `POST /categorias/`, usar por ejemplo:

```json
{
  "nombre": "Living",
  "descripcion": "Muebles para sala de estar"
}
```

Anotá el `id` de la categoría que devuelve la API.

### 2. Crear un mueble relacionado

En `POST /muebles/`, reemplazá `categoria_id` por el ID real de la categoría creada:

```json
{
  "nombre": "Sillon escandinavo",
  "precio": 250000,
  "stock": 5,
  "categoria_id": 1
}
```

La respuesta incluye el objeto anidado `categoria`, por ejemplo:

```json
{
  "id": 1,
  "nombre": "Sillon escandinavo",
  "precio": 250000.0,
  "stock": 5,
  "categoria_id": 1,
  "categoria": {
    "id": 1,
    "nombre": "Living",
    "descripcion": "Muebles para sala de estar"
  }
}
```

El ID puede ser diferente según los registros existentes.

### 3. Probar el resto del CRUD

- `GET /muebles/`: lista muebles, cada uno con su categoría anidada.
- `GET /muebles/{mueble_id}`: obtiene un mueble.
- `PUT /muebles/{mueble_id}`: actualiza sus datos y categoría.
- `DELETE /muebles/{mueble_id}`: elimina el mueble.
- `GET /categorias/`: lista categorías.

La API responde `404` si se intenta usar una categoría inexistente o consultar un registro que no existe, y `409` si se intenta crear una categoría con un nombre ya registrado.

## Migraciones futuras

Después de modificar los modelos, generar una nueva migración con:

```powershell
alembic revision --autogenerate -m "descripcion del cambio"
alembic upgrade head
```

Revisá siempre el archivo generado antes de aplicarlo. Para deshacer la última revisión:

```powershell
alembic downgrade -1
```
