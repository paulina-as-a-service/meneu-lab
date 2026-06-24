# MeneuLab :: Landing

Scaffolding de la landing page de MeneuLab. React + Vite + Tailwind.
Copy en espanol. Diseno derivado del documento de estrategia de marca
(Fredoka + Nunito, paleta plum/pink/yellow/green, marca de chispa, idea de laboratorio).
Incluye modo claro/oscuro con una transicion de barrido.

## Correr en local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de produccion en /dist
npm run preview  # previsualizar el build
npm run lint     # ESLint
npm run format   # Prettier
```

## Donde van los PLACEHOLDERS

Todo el texto y los datos viven en un solo archivo:

    src/data/content.js

Busca los comentarios marcados con `// TODO` para encontrar rapido:

- **Logo**: `brand.logoSrc` (deja la ruta al archivo final en `/public`).
  Si esta vacio, se muestra un placeholder con la marca de chispa + wordmark.
- **Wordmark**: `brand.wordmark`.
- **Contacto**: el objeto `contact` (email, instagram, whatsapp, ciudad).
- **Servicios**: `services.items` (5 servicios, cada uno con 7 complementos).
  Los nombres de servicio y complemento son placeholders; las descripciones
  de los complementos quedan vacias para que las llenes despues
  (`addOns[i].desc`).
- **Portafolio**: `portfolio.items` (6 proyectos placeholder; `imageSrc`
  vacio muestra un placeholder con degradado).

## Modo claro / oscuro

- Toggle (sol / luna) en el navbar, escritorio y movil.
- La preferencia se guarda en `localStorage` (`meneulab-theme`) y, si no
  hay una guardada, respeta `prefers-color-scheme`.
- Un script en `index.html` aplica el tema antes del primer render para
  evitar el parpadeo inicial.
- La transicion es un barrido de color plum:
  - claro a oscuro: barre de izquierda a derecha,
  - oscuro a claro: barre de derecha a izquierda.
- La logica vive en `src/theme/ThemeContext.jsx`. La duracion de cada fase
  es la constante `DURATION` (400 ms). Si el usuario tiene
  `prefers-reduced-motion`, el cambio es instantaneo, sin barrido.

## Estructura

    src/
      App.jsx              # arma las secciones en orden
      main.jsx             # monta la app dentro de <ThemeProvider>
      data/content.js      # TODO el texto + placeholders
      theme/
        ThemeContext.jsx   # estado del tema + animacion de barrido
      components/
        Navbar.jsx         # incluye el ThemeToggle
        ThemeToggle.jsx
        Hero.jsx           # tesis: "no necesitan magia, necesitan metodo"
        About.jsx          # que hacemos / problema que resolvemos
        Words.jsx          # palabras que nos identifican / frases que no
        Pillars.jsx        # opinion / autoridad / comunidad / ventas
        Services.jsx       # 5 servicios x 7 complementos (placeholder)
        Method.jsx         # probar, medir, ajustar
        Portfolio.jsx      # 6 proyectos (placeholder)
        CTA.jsx            # contacto
        Footer.jsx
        Logo.jsx           # logo real o placeholder de chispa
        Spark.jsx          # marca de chispa reutilizable

## Orden de las secciones

Hero, About, Words, Pillars, Services, Method, Portfolio, CTA, Footer.

## Notas

- Es un borrador casi completo. La copy es un primer pase editable, no final.
- El tono es honesto e irreverente pero sin groserias (es material de venta
  publico). Si quieres subirle el filo, se edita en `content.js`.
- Los acentos/tildes se omitieron en el codigo para evitar problemas de
  encoding; conviene re-acentuar la copy final al revisar.
- Los complementos usan un `<details>` nativo (acordeon) para no saturar la
  tarjeta. Se puede cambiar por una vista siempre abierta si prefieres.
