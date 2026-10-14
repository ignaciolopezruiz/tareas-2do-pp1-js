# Práctico FastAPI 4 - SQLAlchemy y SQLite

Proyecto basado en el TP Evaluativo de Mueblería RC. Se conserva FastAPI, los routers, los schemas de Pydantic y la configuración CORS, reemplazando la lista en memoria por una base de datos SQLite.

## Requisitos del práctico

- SQLAlchemy en `requirements.txt`.
- `src/database.py` con `engine`, `SessionLocal`, `Base` y `get_db`.
- Modelo SQLAlchemy `Mueble` en `src/models/muebles.py`.
- Base SQLite local `muebles.db`, creada automáticamente al iniciar la aplicación.
- CRUD persistente: GET todos, GET por ID, POST, PUT y DELETE.

## Instalación y ejecución

Desde la carpeta `Practico_FastAPI4_SQLAlchemy`:

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload
```

En Windows, para activar el entorno virtual:

```powershell
venv\Scripts\activate
```

Abrir la documentación interactiva en <http://127.0.0.1:8000/docs>.

## Cómo probar

1. Ejecutar `GET /muebles/` para ver todos los muebles. La primera vez la lista estará vacía.
2. Ejecutar `POST /muebles/` con un cuerpo como:

```json
{
  "nombre": "Sillón Escandinavo",
  "categoria": "Living",
  "precio": 250000,
  "stock": 5
}
```

3. Volver a ejecutar `GET /muebles/`; el registro debería aparecer con un ID generado por la base de datos.
4. Probar `GET /muebles/{id}`, `PUT /muebles/{id}` y `DELETE /muebles/{id}`.
5. Reiniciar el servidor y volver a consultar `GET /muebles/`: los registros continúan guardados en `muebles.db`.

## Nota sobre el frontend anterior

El POST devuelve la lista completa de muebles, igual que el TP Evaluativo anterior, para mantener compatible la función JavaScript que renderiza el resultado de `crearMueble`. El campo `id` se genera en SQLite; si el frontend anterior todavía envía un `id` en el JSON de creación, el schema de entrada no lo utiliza.
