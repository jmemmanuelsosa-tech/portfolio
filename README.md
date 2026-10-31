# Portafolio — Juan Marcelo Emmanuel Sosa

Portafolio personal de Desarrollador Java Backend, hecho con **React + Vite** y desplegado en **Vercel**.

## Stack

- React 19
- Vite
- CSS puro (sin frameworks), con modo claro/oscuro
- Tipografías: Instrument Serif, Geist y Geist Mono

## Correr en local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Estructura

```
src/
├── data.js            # Todo el contenido (textos, proyectos, links)
├── index.css          # Estilos y paleta de colores
├── App.jsx            # Orden de las secciones
└── components/        # Una sección por archivo
public/
├── cv-juan-sosa.pdf   # CV descargable
└── favicon.svg
```

Para actualizar el contenido solo hace falta editar `src/data.js`.

## Deploy

Conectado a Vercel: cada `git push` a `main` publica una nueva versión automáticamente.
