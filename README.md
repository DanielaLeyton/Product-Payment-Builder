# PayKit Builder

Wiki interactiva para construir productos de medios de pago, enfocada inicialmente en Chile.

## Estructura

- `src/`: frontend estatico de la app.
- `src/modules/`: catalogos y helpers compartidos.
- `src/services/`: capa de datos/logica para construir kits y desacoplar la UI de la fuente de contenido.
- `src/sections/`: secciones independientes del kit; cada archivo expone el renderer de una seccion.
- `scripts/build.js`: copia los assets de `src/` a `dist/`.
- `dist/`: salida generada para deploy.
- `vercel.json`: configuracion de deploy en Vercel.

## Comandos

```bash
npm run build
```

Vercel ejecuta `npm run build` y publica `dist/`.
