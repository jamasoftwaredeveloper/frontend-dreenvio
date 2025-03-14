## Introducción

Este proyecto utiliza React junto con Vite para proporcionar un entorno de desarrollo rápido y eficiente. Se han configurado algunas reglas de ESLint para mantener la calidad del código. Además, este proyecto consume APIs REST de productos, precios especiales y usuarios, permitiendo listar, crear, actualizar y eliminar precios especiales, así como listar productos.

## Pasos para ejecutar localmente

1. Clona el repositorio:
2. Asegurarse de tener instalados Node.js, npm y MongoDB (si deseas monitorear tu base de datos).
3. Abrir la consola (cmd) en la ubicación del proyecto. Una manera es navegar a la carpeta del proyecto, escribir `cmd` en la barra de direcciones y presionar Enter.
4. Crear un archivo `.env` en la raíz del proyecto y agregar la siguiente variable:
    ```sh
    VITE_API_URL=http://localhost:3000/api/v1
    ```
   Nota: La URL puede variar dependiendo del puerto en el que se ejecute la API.
5. Instala las dependencias:
    ```sh
    npm install
    ```
6. Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```

## Justificación de elecciones técnicas

- **Vite**: Elegido por su rápido tiempo de inicio y su eficiente recarga en caliente (HMR).
- **React**: Una biblioteca popular para construir interfaces de usuario, conocida por su flexibilidad y rendimiento.
- **ESLint**: Utilizado para mantener la calidad del código y asegurar consistencia en el estilo de codificación.
- **Babel/SWC**: Herramientas para la transpilación de código, elegidas por su compatibilidad con Fast Refresh.
- **JavaScript**: Elegido por su amplia adopción y soporte en la comunidad, así como su flexibilidad y facilidad de uso. JavaScript permite un desarrollo rápido y es compatible con una gran cantidad de bibliotecas y frameworks, lo que facilita la integración y el desarrollo de nuevas funcionalidades.

## Descripción de la estructura del proyecto

- `src/`: Contiene el código fuente del proyecto.
  - `components/`: Componentes reutilizables de React.
  - `assets/`: Recursos estáticos como imágenes y estilos.
- `public/`: Archivos estáticos que se sirven directamente.
- `package.json`: Archivo de configuración de npm que incluye scripts y dependencias.
- `vite.config.js`: Configuración de Vite.
- `eslintrc.js`: Configuración de ESLint.

