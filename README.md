# Proyecto: Nivelación-TP1

Este proyecto permite ejecutar una aplicación web tanto con **JavaScript y Live Server** como con **Python y Flask**.
Esta aplicacion, contiene una caja de texto que al presionar la tecla Enter, muestra una ventana emergente con el texto cargado en la caja.

## Requisitos

### Para ejecutar con Live Server (JavaScript)
- Tener instalado **VS Code** (o cualquier otro editor con soporte para Live Server).
- Tener la extensión **Live Server** instalada en VS Code.

### Para ejecutar con Flask (Python)
- Tener **Python 3.8+** instalado.
- Instalar Flask con el siguiente comando:
  
  ```bash
  pip install flask
  ```

## Estructura del Proyecto (JavaScript y Flask)

```
Nivelacion-TP1/
│── Trabajojs/            # Versión con JavaScript y Live Server
│   ├── index.html         # Archivo HTML principal
│   ├── style.css         # Archivo CSS
│   ├── main.js         # Archivo JavaScript principal
│
│── Trabajopy/       # Versión con Flask
│   ├── app.py           # Archivo principal de Flask
│   ├── template/       # Carpeta para HTML (Flask)
│   │   ├── index.html  # Archivo HTML principal
│   ├── static/         # Carpeta para archivos estáticos (Flask)
│       ├── style.css
│       
```

## Ejecución del Proyecto

### 1️⃣ Ejecutar con Live Server (JavaScript)
1. Abre la carpeta `Trabajojs/` en **VS Code**.
2. Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.
3. Se abrirá en el navegador en `http://127.0.0.1:5500/` o un puerto similar.

### 2️⃣ Ejecutar con Flask (Python)
1. Abre una terminal en la carpeta `Trabajopy/`.
2. Ejecuta el siguiente comando:
   
   ```bash
   python app.py
   ```
3. Flask iniciará el servidor en `http://127.0.0.1:5000/`.
4. Abre el navegador y accede a `http://127.0.0.1:5000/`.



