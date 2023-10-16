# jest-express-esm

**jest-express-esm** es una aplicación Express.js que utiliza ECMAScript Modules (ESM) y Jest para realizar pruebas automatizadas. La aplicación consta de un solo endpoint 'api/ping' que retorna un objeto JSON `{msg: 'pong'}`.

# Requisitos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [https://nodejs.org/](https://nodejs.org/).

# Instalación

1. Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/Benjamin-mne/jest-express-esm.git
cd jest-express-esm
```

2. Instala las dependencias utilizando npm:
```bash
npm install
```

# Uso: 
## Ejecución en desarrollo

Puedes iniciar el servidor en modo de desarrollo con nodemon utilizando el siguiente comando:

`npm run dev`

El servidor se ejecutará en http://localhost:3000.

## Ejecución en producción
Para ejecutar la aplicación en modo de producción, puedes usar el siguiente comando:

`npm start`

## Pruebas

Se han incluido pruebas automatizadas en el proyecto utilizando Jest. Puedes ejecutar las pruebas con el siguiente comando:

`npm test`
## Linting
Este proyecto utiliza StandardJS para el linting del código. Puedes ejecutar el linting con el siguiente comando:

`npm run lint`

Las pruebas se encuentran en el archivo ping.routes.test.js.

## Contribución
Si deseas contribuir a este proyecto, ¡estamos abiertos a tus contribuciones! Si tienes sugerencias, problemas o mejoras, no dudes en abrir un issue o enviar una pull request.

# Licencia
Este proyecto está bajo la Licencia ISC.
