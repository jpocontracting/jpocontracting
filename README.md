<div align="center">

# JPO Contracting Unlimited Inc.
### Plataforma Web Corporativa · Arquitectura · Ingeniería · Permisos

**Ontario, Canadá — Presencia digital diseñada para posicionar a JPO como líder técnico en su industria**

</div>

---

## 🎯 Visión General del Proyecto

Este no es un sitio web corporativo estándar. Es una **plataforma digital de alto rendimiento** construida desde cero para transmitir exactamente lo que JPO Contracting representa: precisión técnica, solidez de ingeniería y un estándar de calidad que está por encima del promedio de la industria.

Cada decisión de diseño, cada línea de interacción y cada milisegundo de animación fue pensado con un solo objetivo: que un visitante entienda, en los primeros cinco segundos, que está frente a una empresa de ingeniería seria, moderna y confiable — y que se convierta en cliente.

El proyecto combina tres pilares que rara vez conviven en un mismo desarrollo:

| Pilar | Resultado |
|---|---|
| **Diseño cinematográfico** | Una experiencia visual de nivel agencia premium, con narrativa visual propia |
| **Ingeniería de producto** | Arquitectura de código modular, mantenible y escalable a largo plazo |
| **Inteligencia conversacional propia** | Un asistente virtual construido 100% a medida, sin depender de terceros |

---

## 🏛️ Arquitectura del Sitio

El sitio está estructurado como un recorrido narrativo completo del valor que ofrece JPO, sección por sección:

- **Hero cinematográfico** — Imagen de fondo con efecto parallax y zoom controlado por scroll, partículas animadas en canvas y tipografía industrial de gran formato que comunica autoridad desde el primer instante.
- **Catálogo de servicios (20+ soluciones)** — Organizado en cuatro categorías profesionales: Ingeniería Estructural y Diseño, Estudios y Diagnóstico Técnico, Gestión y Supervisión de Proyectos, e Ingeniería por Tipo de Edificación. Cada categoría está curada para que el cliente encuentre exactamente el servicio que necesita sin fricción.
- **Sección de Soluciones** — Tarjetas interactivas con efecto *flip* (volteo 3D) que revelan, al tacto o clic, el beneficio concreto detrás de cada promesa: coordinación integral, ahorro a largo plazo, punto único de contacto, mitigación de riesgo y cumplimiento de cronogramas.
- **Portafolio y métricas de resultados** — Estadísticas de impacto (proyectos entregados, años de trayectoria, porcentaje de entregas a tiempo, jurisdicción de operación), incluyendo una tarjeta interactiva que profundiza en el compromiso de transparencia de la empresa.
- **Historia y valores corporativos** — Narrativa institucional con credenciales legales, año de fundación y los tres pilares de identidad: Excelencia, Integridad e Innovación.
- **Contacto inteligente** — Formulario funcional con validación, estados de envío en tiempo real y confirmación visual, además de accesos directos a llamada telefónica y ubicación en mapa.
- **Mapa interactivo en el footer** — Un popover elegante con mapa en modo oscuro (basado en tiles CARTO Dark Matter) que se ancla junto al botón de ubicación en lugar de interrumpir al usuario con un modal invasivo — inicialización perezosa (*lazy load*) para no penalizar el rendimiento de carga inicial.

---

## 🌐 Sistema Bilingüe Integral (Inglés / Español)

Todo el sitio — no solo fragmentos — opera bajo un **motor de internacionalización construido a medida**, sin dependencias externas de terceros ni librerías pesadas de traducción:

- Cambio de idioma **instantáneo**, sin recargar la página.
- Cobertura total: textos, títulos, meta-descripciones (SEO), placeholders de formularios, atributos de accesibilidad (`aria-label`) — absolutamente todo el contenido se traduce de forma coherente.
- El idioma del sitio y el idioma del asistente virtual **se mantienen sincronizados automáticamente**: si el visitante cambia el idioma del sitio, el chatbot responde en el mismo idioma sin que el usuario tenga que hacer nada.
- Diseñado para que el inglés sea el idioma de entrada por defecto (mercado objetivo: Ontario, Canadá), preservando en todo momento una experiencia impecable para el público hispanohablante.

---

## 🤖 Leo — El Asistente Virtual de JPO

Esta es, sin duda, la pieza más ambiciosa del proyecto: un **asistente conversacional propietario**, diseñado y construido íntegramente para JPO, que vive directamente en el navegador del cliente — sin licencias de terceros, sin costos recurrentes de API de inteligencia artificial, y sin dependencia de ningún proveedor externo de pago.

### ¿Qué hace Leo?

Leo es el primer punto de contacto virtual de JPO: responde preguntas frecuentes sobre servicios, guía al visitante hacia la propuesta comercial correcta, explica la cobertura geográfica de la empresa, orienta sobre tiempos de proyecto y conecta al visitante con un asesor humano cuando es necesario — las 24 horas, sin pausas para almuerzo.

### La ingeniería detrás de Leo

**1. Motor propio de comprensión de intención**
En lugar de depender de un modelo de lenguaje externo (con los costos, la latencia y los riesgos de privacidad que eso implica), Leo utiliza un **motor de coincidencia semántica por palabras clave construido a medida en JavaScript puro**. Este motor es capaz de:

- Detectar **hasta 3 intenciones distintas** dentro de un mismo mensaje del usuario y responder a cada una por separado.
- Extraer palabras clave relevantes incluso en consultas largas y mal estructuradas.
- Seleccionar variantes de respuesta de forma aleatoria dentro de cada tema, para que la conversación se sienta natural y nunca repetitiva.
- Operar con una base de conocimiento **completamente modular**: cada área temática (servicios, proyectos, precios, equipo, preguntas frecuentes) vive en su propio módulo independiente, lo que permite ampliar el conocimiento del asistente sin tocar el motor central — cero riesgo de romper funcionalidad existente al escalar el contenido.

**2. Conocimiento bilingüe nativo**
Leo no traduce sus respuestas sobre la marcha: mantiene **bases de conocimiento independientes y curadas en inglés y en español**, garantizando que cada respuesta suene natural, profesional y culturalmente apropiada en ambos idiomas — no una traducción automática genérica.

**3. Capa de conocimiento general — integración con Wikipedia**
Cuando una consulta se sale del ámbito específico de JPO, Leo puede recurrir en tiempo real a la **API pública de Wikipedia**, con soporte de idioma dinámico (inglés/español según el idioma activo del sitio), para ofrecer contexto adicional útil sin dejar al visitante sin respuesta.

**4. Capa de razonamiento conceptual — integración con ConceptNet**
Como respaldo adicional, Leo se apoya en la **API pública de ConceptNet**, una red de conocimiento semántico de código abierto, para establecer relaciones conceptuales entre términos (qué es, para qué sirve, de qué está hecho, con qué se relaciona) cuando ni la base de conocimiento propia ni Wikipedia tienen una respuesta directa. Este módulo traduce automáticamente relaciones semánticas técnicas a lenguaje natural y fluido, en el idioma correcto.

**5. Arquitectura en cascada de tres niveles**
El resultado es un sistema de respuesta inteligente y en capas:

```
Consulta del usuario
      │
      ▼
① Base de conocimiento propia de JPO  →  respuesta inmediata, curada, on-brand
      │  (si no hay coincidencia suficiente)
      ▼
② Wikipedia API  →  contexto enciclopédico en tiempo real
      │  (si no hay resultados útiles)
      ▼
③ ConceptNet API  →  razonamiento conceptual de respaldo
```

Este diseño garantiza que **Leo casi nunca se quede sin poder responder algo útil**, sin sacrificar el control total sobre el tono y la precisión de la información propia de la empresa.

**6. Experiencia de usuario del chat**
- Interfaz flotante no intrusiva, con indicador de estado en línea y badge de notificación.
- Preguntas rápidas sugeridas (*quick replies*) para reducir la fricción de escritura.
- Selector de idioma propio dentro del panel de chat, sincronizado bidireccionalmente con el idioma general del sitio.
- Indicador visual de "escribiendo" y presentación tipo *typewriter* para las respuestas, reforzando la sensación de una conversación real y viva.

---

## 🎨 Ingeniería de Experiencia Visual

- **Animaciones de scroll de nivel cinematográfico**, con entrada escalonada de elementos y transiciones fluidas basadas en curvas de easing personalizadas (no easings genéricos de librería).
- **Sistema de partículas en canvas** con física propia (velocidad, rebote, líneas de conexión dinámicas entre partículas cercanas), que respeta automáticamente la preferencia del sistema operativo del usuario por reducir el movimiento (`prefers-reduced-motion`) — un detalle de accesibilidad que muy pocos sitios corporativos implementan correctamente.
- **Header inteligente y adaptativo**: se oculta al hacer scroll para maximizar el espacio de lectura, y reaparece de forma intuitiva al pasar el cursor por el borde superior o al hacer scroll hacia arriba — un patrón de interacción refinado, probado y corregido a través de múltiples ciclos de control de calidad.
- **Efecto de cristal esmerilado (glassmorphism)** en la barra de navegación, con bordes luminosos sutiles que simulan un bisel de vidrio real.
- **Menú móvil de pantalla completa**, numerado y con entrada animada y escalonada de cada enlace — una experiencia de navegación mobile que se siente premium, no como un menú hamburguesa genérico.
- Paleta de color corporativa coherente en cada pixel del sitio, reforzando identidad de marca de principio a fin.

---

## ⚙️ Ingeniería de Producto y Rendimiento

- **Cero dependencias de pago**: ni el motor del chatbot, ni el sistema de traducción, ni el mapa interactivo dependen de licencias, suscripciones o claves de API de pago. Esto se traduce en **costos operativos recurrentes iguales a cero** para estas funcionalidades clave.
- **Carga perezosa (*lazy loading*) inteligente**: el mapa interactivo del footer, por ejemplo, no se inicializa hasta que el usuario efectivamente lo abre — ahorrando peso de carga inicial y acelerando el primer renderizado de la página.
- **Diseño responsivo real, no solo "adaptado"**: cada componente — desde la barra superior de contacto hasta las tarjetas de servicio — fue rediseñado específicamente para mobile, no simplemente reescalado. Los elementos de contacto directo (llamada telefónica, selector de idioma) permanecen siempre accesibles con un solo toque, sin importar el tamaño de pantalla.
- **Arquitectura de archivos modular**: estilos, lógica de interfaz, datos del chatbot y sistema de idiomas viven en módulos independientes y desacoplados, lo que permite escalar contenido (nuevos servicios, nuevo idioma, nuevas respuestas del asistente) sin tocar el código del motor — reduciendo drásticamente el riesgo y el costo de mantenimiento futuro.
- **Accesibilidad (a11y) como estándar, no como ocurrencia tardía**: atributos `aria-label`, `aria-pressed` y `aria-expanded` correctamente implementados en botones, tarjetas interactivas y controles de idioma, además de soporte completo de navegación por teclado en los componentes interactivos.
- **SEO dinámico multilenguaje**: título de página y meta-descripción se actualizan automáticamente según el idioma activo, asegurando que el sitio se indexe y se presente correctamente sin importar el mercado.

---

## 🧩 Resumen Técnico

| Capa | Tecnología |
|---|---|
| Interfaz y estilos | HTML5 semántico + CSS3 avanzado (variables custom, glassmorphism, animaciones nativas) |
| Interactividad | JavaScript nativo (Vanilla JS), sin frameworks pesados innecesarios |
| Animaciones de scroll | Librería ligera de animaciones al hacer scroll |
| Mapa interactivo | Leaflet.js + tiles CARTO Dark Matter |
| Motor conversacional | Motor propio de coincidencia semántica por palabras clave |
| Conocimiento ampliado del asistente | Wikipedia API + ConceptNet API (ambas gratuitas, sin clave de acceso) |
| Internacionalización | Motor de i18n propio (EN/ES), sin librerías externas |

---

## 💎 Por Qué Este Proyecto Está Por Encima del Estándar

La mayoría de los sitios corporativos en esta industria se resuelven con una plantilla genérica y un formulario de contacto. Este proyecto fue construido con la misma exigencia técnica que JPO aplica a sus propios proyectos de ingeniería:

- Un asistente virtual propio, inteligente y bilingüe, en lugar de un simple widget de contacto.
- Una experiencia visual diseñada específicamente para transmitir autoridad técnica, no una plantilla reutilizada.
- Una arquitectura de código pensada para crecer con el negocio durante años, no para ser reemplazada en doce meses.
- Cero costos ocultos de licencias o suscripciones de terceros para operar sus funcionalidades más avanzadas.
- Atención al detalle en cada micro-interacción: desde cómo se oculta el header al hacer scroll, hasta cómo respira una tarjeta de servicio al aparecer en pantalla.

Este es un producto digital construido para representar, con la misma precisión que un plano estructural, todo lo que JPO Contracting Unlimited Inc. es capaz de construir.

---

<div align="center">

**JPO Contracting Unlimited Inc.**
East York, Ontario, Canadá

</div>
