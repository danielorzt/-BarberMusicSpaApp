# 📱 BarberMusic&Spa - Aplicación Móvil

<div align="center">
  <img src="https://i.imgur.com/U4YpW38.png" alt="Logo BarberMusic&Spa App" width="200"/> <p><strong>Vive la Experiencia BarberMusic&Spa Donde Quiera Que Vayas</strong></p>
  <p>
    <img src="https://img.shields.io/badge/React%20Native-0.74-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native"/>
    <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Expo-SDK%2051-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo"/> <img src="https://img.shields.io/badge/estado-en%20desarrollo-yellowgreen?style=for-the-badge" alt="Estado del Proyecto"/>
    <a href="LICENSE.md">
      <img src="https://img.shields.io/badge/Licencia-MIT-yellow?style=for-the-badge" alt="Licencia: MIT"/>
    </a>
  </p>
</div>

---

## 📜 Índice

* [🚀 Demo / Descarga](#-demo--descarga)
* [🌟 Descripción General](#-descripción-general)
* [✨ Características Principales](#-características-principales)
* [🛠️ Stack Tecnológico](#️-stack-tecnológico)
* [📋 Requisitos Previos para Desarrollo](#-requisitos-previos-para-desarrollo)
* [🚀 Instalación y Ejecución](#-instalación-y-ejecución)
* [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
* [🔗 Integración con API Backend](#-integración-con-api-backend)
* [📸 Capturas de Pantalla](#-capturas-de-pantalla)
* [🤝 Contribuciones](#-contribuciones)
* [👨‍💻 Equipo de Desarrollo](#️-equipo-de-desarrollo)
* [📜 Licencia](#-licencia-1)
* [📧 Contacto](#-contacto)

---

## 🚀 Demo / Descarga

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.yourbundleid" title="Descargar en Google Play">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/256px-Google_Play_Store_badge_EN.svg.png" alt="Disponible en Google Play" width="180">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://apps.apple.com/app/your-app-name/idYOURAPPID" title="Descargar en App Store">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/256px-Download_on_the_App_Store_Badge.svg.png" alt="Disponible en App Store" width="180">
  </a>
</p>
<p align="center"><em>(¡Enlaces próximamente! Reemplaza <code>com.yourbundleid</code> y <code>idYOURAPPID</code>)</em></p>

---

## 🌟 Descripción General

La aplicación móvil **BarberMusic&Spa** lleva la experiencia premium de nuestros spas y barberías directamente a tu dispositivo. Diseñada para complementar nuestra [plataforma web](https://barbermusicandspsa.com) (¡Próximamente!), esta aplicación React Native permite a los clientes gestionar sus citas, explorar servicios, comprar productos y descubrir sucursales, todo con la comodidad y fluidez de una aplicación nativa.

Nuestra propuesta única de valor es la integración de música y relajación en cada servicio, y la app móvil te permite personalizar aún más tu experiencia. Disfruta de una interfaz intuitiva y un rendimiento optimizado para iOS y Android.

---

## ✨ Características Principales

| Característica                      | Descripción                                                                                             | Icono (Ejemplo) |
|-------------------------------------|---------------------------------------------------------------------------------------------------------|:---------------:|
| **Reservas Simplificadas** | Agenda, modifica o cancela citas para spa y barbería de forma intuitiva.                                | 📅              |
| **Tienda Integrada** | Navega y compra productos premium para el cuidado personal con facilidad.                                 | 🛒              |
| **Localizador de Sucursales** | Encuentra la sucursal más cercana con mapas interactivos y detalles de contacto.                         | 📍              |
| **Perfiles Personalizados** | Accede a tu historial de citas, pedidos, preferencias musicales y gestiona tu información.                | 👤              |
| **Notificaciones Push** | Recibe recordatorios de citas, promociones especiales y actualizaciones importantes.                      | 🔔              |
| **Pagos Seguros** | Integración con pasarelas de pago seguras (via API del backend).                                          | 💳              |
| **Preferencias Musicales** | Elige tu ambiente musical preferido para tu próxima visita (si la funcionalidad está activa).             | 🎵              |
| **Experiencia Bilingüe** | Disponible en Español e Inglés para mayor accesibilidad. (Opcional, si aplica)                           | 🌐              |

---

## 🛠️ Stack Tecnológico

| Componente             | Tecnología / Librería                                                                                                | Notas                                           |
|------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| **Framework Principal** | <img src="https://img.shields.io/badge/React%20Native-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React Native" height="20"> React Native | Desarrollo multiplataforma iOS & Android        |
| **Lenguaje** | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" height="20"> TypeScript   | Tipado estático para mayor robustez             |
| **Plataforma de Desarrollo** | <img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo" height="20"> Expo Go / EAS Build     | Para desarrollo rápido y builds (*si aplica*)   |
| **Navegación** | React Navigation                                                                                                     | (Especifica versión, ej: v6)                    |
| **Gestión de Estado** | (Ej: Redux Toolkit, Zustand, Context API)                                                                            | ***Tú debes especificar cuál usas*** |
| **UI Toolkit** | (Ej: React Native Paper, NativeBase, o UI personalizada)                                                             | ***Tú debes especificar si usas alguna*** |
| **Comunicaciones API** | Axios / Fetch API                                                                                                    | Para consumir el backend de BarberMusic&Spa     |
| **Iconos** | React Native Vector Icons                                                                                            | (*Si usas esta librería o similar*)             |
| **Linting / Formato** | ESLint, Prettier                                                                                                     | Para calidad y consistencia del código          |

---

## 📋 Requisitos Previos para Desarrollo

* <img src="https://img.shields.io/badge/Node.js-18.x+-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" height="20"> Node.js (v18.x o superior recomendado)
* Yarn (`npm install -g yarn`) o npm (viene con Node.js)
* Watchman (para usuarios de macOS): `brew install watchman`
* **Para Android:**
    * Android Studio (descarga desde [developer.android.com](https://developer.android.com/studio))
    * Android SDK (instalado vía Android Studio)
    * Emulador Android configurado o dispositivo físico con depuración USB habilitada.
* **Para iOS (en macOS):**
    * Xcode (desde la Mac App Store)
    * CocoaPods (`sudo gem install cocoapods`)
    * Simulador iOS configurado o dispositivo físico.
* **Expo CLI (Global, si estás usando Expo):**
    ```bash
    npm install -g expo-cli
    ```

---

## 🚀 Instalación y Ejecución

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/danielorzt/danielorzt--barbermusicspaapp.git](https://github.com/danielorzt/danielorzt--barbermusicspaapp.git)
    cd danielorzt--barbermusicspaapp
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto (copia de `.env.example` si existe) y añade:
    ```env
    API_BASE_URL=[https://tu-api-backend.com/api](https://tu-api-backend.com/api) # Reemplaza con la URL de tu API
    # Otras variables como claves de API para servicios de terceros
    ```
    *Asegúrate de que `.env` esté en tu `.gitignore`.*

4.  **Ejecuta la aplicación:**

    * **Si usas Expo:**
        ```bash
        npx expo start
        ```
        Escanea el código QR con la app Expo Go, o presiona `a` para Android / `i` para iOS en la terminal.

    * **Si usas React Native CLI (Bare Workflow):**
        * Inicia el Metro Bundler:
            ```bash
            npm start
            # o
            yarn start
            ```
        * En otra terminal, para Android:
            ```bash
            npm run android
            # o
            yarn android
            ```
        * En otra terminal (solo macOS), para iOS:
            ```bash
            npm run ios
            # o
            yarn ios
            # (Puede que necesites: cd ios && pod install && cd ..)
            ```

---

## 🏗️ Estructura del Proyecto

La aplicación sigue una arquitectura modular, inspirada en principios de Clean Architecture, para promover la separación de preocupaciones y la mantenibilidad.
graph TD
    A[danielorzt--barbermusicspaapp/] --> B(app.json);
    A --> C(App.tsx);
    A --> D(index.ts);
    A --> E(package.json);
    A --> F(tsconfig.json);
    A --> G[assets/];
    A --> H[src/];

    H --> I[application/];
    I --> J[use-cases/];
    J --> K[auth/];
    J --> L[booking/];
    J --> M[branch/];
    J --> N[category/];
    J --> O[product/];
    J --> P[service/];

    K --> KA(GetCurrentUserUseCase.ts);
    K --> KB(LoginUserUseCase.ts);
    K --> KC(RegisterUserUseCase.ts);

    H --> Q[domain/];
    Q --> R[entities/];
    R --> RA(User.ts);
    R --> RB(Product.ts);
    R --> RC(Booking.ts);
    R --> RD(...otras entidades);

    Q --> S[repositories/];
    S --> SA(IUserRepository.ts);
    S --> SB(IProductRepository.ts);
    S --> SC(IBookingRepository.ts);
    S --> SD(...otras interfaces);

    H --> T[infrastructure/];
    T --> U[navigation/];
    T --> V[services/];
    T --> W[storage/];
    T --> X[repositoriesImpl/];

    H --> Y[presentation/];
    Y --> Z[components/];
    Y --> AA[screens/];
    Y --> AB[hooks/];
    Y --> AC[theme/];

    subgraph "Capa de Aplicación"
        direction LR
        J
    end

    subgraph "Capa de Dominio"
        direction LR
        R
        S
    end

    subgraph "Capa de Infraestructura (Sugerida)"
        direction LR
        T
    end

    subgraph "Capa de Presentación (Sugerida)"
        direction LR
        Y
    end

**Explicación de Directorios Clave:**

* `src/application/use-cases/`: Orquesta la lógica de negocio para acciones específicas.
* `src/domain/entities/`: Modelos de negocio centrales y sus reglas.
* `src/domain/repositories/`: Contratos (interfaces) para operaciones de datos.
* `src/infrastructure/` (Sugerido): Implementaciones concretas (API, BBDD local, navegación).
* `src/presentation/` (Sugerido): Componentes UI, pantallas, y lógica de vista.
* `assets/`: Imágenes, fuentes, etc.

---

## 🔗 Integración con API Backend

Esta aplicación móvil consume la API RESTful del backend de **BarberMusic&Spa**.

* **Endpoint Base:** Configurado en `.env` (`API_BASE_URL`).
* **Autenticación:** Se utiliza autenticación basada en Tokens JWT. El token se obtiene al iniciar sesión y se envía en las cabeceras de las solicitudes protegidas.
* **Principales Entidades Consumidas:** Usuarios, Servicios, Productos, Sucursales, Agendamientos, Categorías.

---

## 📸 Capturas de Pantalla (Ejemplos)

<p align="center">
  <img src="https://i.imgur.com/SExVpLu.png" alt="Pantalla de Bienvenida BarberMusic&Spa App" width="220" style="border-radius: 20px; margin: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <img src="https://i.imgur.com/Nq9X2Wk.png" alt="Listado de Servicios BarberMusic&Spa App" width="220" style="border-radius: 20px; margin: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <img src="https://i.imgur.com/vR7Q8OU.png" alt="Detalle de Producto BarberMusic&Spa App" width="220" style="border-radius: 20px; margin: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <img src="https://i.imgur.com/iYpG5sH.png" alt="Perfil de Usuario BarberMusic&Spa App" width="220" style="border-radius: 20px; margin: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
</p>
<p align="center"><em>Nota: Estas son imágenes genéricas de ejemplo. ¡Reemplázalas con capturas reales de tu aplicación!</em></p>

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta aplicación:

1.  **Haz un Fork** del proyecto en GitHub.
2.  **Crea una nueva rama** para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad-increible`).
3.  **Realiza tus cambios** y haz commit (`git commit -m 'Añade nueva funcionalidad increíble'`).
4.  **Haz Push** a tu rama (`git push origin feature/nueva-funcionalidad-increible`).
5.  **Abre un Pull Request** contra la rama `main` (o `develop`) del repositorio original.

Por favor, asegúrate de que tu código siga las guías de estilo del proyecto y de que los tests (si los hay) pasen.

---

## 👨‍💻 Equipo de Desarrollo Móvil

| Rol                               | Nombre                                                                 | Contacto / Perfil                                      |
|-----------------------------------|------------------------------------------------------------------------|--------------------------------------------------------|
| **Desarrollador Principal (Móvil)** | Daniel Ortiz                                                           | [GitHub](https://github.com/danielorzt)                |
| (Añadir más roles/miembros)       | (Nombre del miembro)                                                   | (Enlace GitHub/LinkedIn)                               |

*Basado en el equipo del backend y el solicitante.*

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.
(Asegúrate de tener un archivo `LICENSE.md` con el texto de la licencia MIT).

---

## 📧 Contacto

Si tienes preguntas, sugerencias o quieres reportar un problema, no dudes en contactarnos:

* **Email:** [catcomarketing@gmail.com](mailto:catcomarketing@gmail.com)
* **Issues en GitHub:** [Abrir un Issue](https://github.com/danielorzt/danielorzt--barbermusicspaapp/issues)

---

<div align="center">
  <p>© 2024-2025 BarberMusic&Spa App Móvil</p>
  <p>🎵💈✨</p>
</div>
