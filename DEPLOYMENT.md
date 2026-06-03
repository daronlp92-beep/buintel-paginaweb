# 🚀 Guía de Despliegue — Buintel Automations en Vercel

## Estructura del Proyecto

```
buintel-automations/
├── app/
│   ├── layout.tsx              # Layout raíz + SEO global + metadata
│   ├── page.tsx                # Página principal (todas las secciones)
│   ├── privacy/
│   │   └── page.tsx            # Política de Privacidad
│   └── terms/
│       └── page.tsx            # Términos y Condiciones
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navegación fija con glassmorphism
│   │   └── Footer.tsx          # Footer completo con legal links
│   └── sections/
│       ├── HeroSection.tsx     # Hero con canvas particles + stats
│       ├── AboutSection.tsx    # Quiénes somos, misión, visión, valores
│       ├── ServicesSection.tsx # 6 servicios con cards premium
│       ├── UseCasesSection.tsx # 6 casos de uso por industria
│       ├── TechnologiesSection.tsx  # Stack tecnológico (8 tecnologías)
│       ├── BenefitsSection.tsx # 6 beneficios cuantificados + testimonial
│       └── ContactSection.tsx  # Formulario → WhatsApp + canales directos
├── lib/
│   └── utils.ts                # Utilidades (cn function)
├── styles/
│   └── globals.css             # Design tokens, animaciones, componentes base
├── public/
│   ├── logo.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── tailwind.config.ts          # Colores PANTONE 7546 C (identidad Buintel)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Paso 1 — Requisitos Previos

Asegúrate de tener instalado:

```bash
node --version   # Requiere Node.js 18.17+ (recomendado 20+)
npm --version    # npm 9+
```

Si no tienes Node.js, descárgalo desde: https://nodejs.org

---

## Paso 2 — Instalación local

```bash
# 1. Entra a la carpeta del proyecto
cd buintel-automations

# 2. Instala dependencias
npm install

# 3. Corre el servidor de desarrollo
npm run dev
```

Abre http://localhost:3000 en tu navegador. Deberías ver el sitio completo.

---

## Paso 3 — Agregar favicons (IMPORTANTE)

El sitio referencia los siguientes archivos que debes generar y colocar en `/public/`:

- `favicon.ico` — 32×32px
- `favicon-16x16.png` — 16×16px
- `favicon-32x32.png` — 32×32px
- `apple-touch-icon.png` — 180×180px
- `og-image.png` — 1200×630px (imagen de Open Graph para redes sociales)

**Herramienta gratuita recomendada:** https://realfavicongenerator.net

Sube tu logo SVG (`/public/logo.svg`) y descarga el paquete de favicons generado.

---

## Paso 4 — Verificar build de producción (local)

```bash
npm run build
npm run start
```

Si el build es exitoso, el proyecto está listo para subir.

---

## Paso 5 — Crear cuenta en Vercel

1. Ve a https://vercel.com
2. Haz clic en **"Sign Up"**
3. Regístrate con tu cuenta de **GitHub** (recomendado para deploy automático)

---

## Paso 6 — Subir el código a GitHub

```bash
# En la carpeta del proyecto:
git init
git add .
git commit -m "feat: sitio web corporativo Buintel Automations v1.0"

# Crea un repositorio en github.com (ej: "buintel-website")
# Luego conecta:
git remote add origin https://github.com/TU_USUARIO/buintel-website.git
git branch -M main
git push -u origin main
```

---

## Paso 7 — Importar proyecto en Vercel

1. En el dashboard de Vercel, haz clic en **"Add New Project"**
2. Haz clic en **"Import Git Repository"**
3. Selecciona el repositorio `buintel-website`
4. Vercel detectará automáticamente que es Next.js
5. Configuración recomendada:
   - **Framework Preset:** Next.js ✅ (autodetectado)
   - **Root Directory:** `./` (dejar vacío)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Haz clic en **"Deploy"** 🚀

El despliegue tomará 1-3 minutos. Verás una URL temporal como:
`https://buintel-website-xxx.vercel.app`

---

## Paso 8 — Conectar dominio personalizado (buintel.com)

### En Vercel:

1. Ve a tu proyecto → **Settings** → **Domains**
2. Escribe `buintel.com` y haz clic en **"Add"**
3. También agrega `www.buintel.com`
4. Vercel te mostrará los registros DNS que debes configurar

### En tu proveedor de dominio (GoDaddy, Namecheap, etc.):

Agrega los siguientes registros DNS:

```
Tipo    Nombre    Valor
A       @         76.76.21.21
CNAME   www       cname.vercel-dns.com
```

> ⚠️ Los cambios de DNS pueden tardar entre 10 minutos y 48 horas en propagarse.

### Verificar:

Una vez propagado, Vercel asignará automáticamente un **certificado SSL gratuito** (HTTPS). Tu sitio estará disponible en:
- https://buintel.com
- https://www.buintel.com (redirige automáticamente)

---

## Paso 9 — Variables de entorno (opcional, para futuras integraciones)

Si en el futuro agregas integraciones de API (Resend para email, etc.):

1. En Vercel → **Settings** → **Environment Variables**
2. Agrega las variables necesarias
3. Redespliega con `git push`

Ejemplo:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://buintel.com
```

---

## Paso 10 — Actualizaciones futuras

Cada `git push` a la rama `main` desencadenará un redeploy automático en Vercel:

```bash
# Edita cualquier archivo
# Luego:
git add .
git commit -m "feat: actualización de contenido"
git push
```

Vercel desplegará los cambios en ~2 minutos.

---

## Correo Empresarial Personalizado (atencionaclientes@buintel.com)

Para configurar el correo con tu dominio:

### Opción A — Google Workspace (recomendado, ~$6 USD/mes)
1. Ve a https://workspace.google.com
2. Selecciona tu dominio `buintel.com`
3. Sigue el asistente de configuración
4. Agrega los registros MX que Google te indique en tu DNS

### Opción B — Zoho Mail (gratuito hasta 5 usuarios)
1. Ve a https://zoho.com/mail
2. Selecciona **"Add Existing Domain"**
3. Verifica la propiedad del dominio
4. Configura los registros MX en tu proveedor de DNS

---

## SEO y Analítica Post-lanzamiento

### Google Search Console:
1. Ve a https://search.google.com/search-console
2. Agrega la propiedad `buintel.com`
3. Verifica via archivo HTML o registro DNS
4. Envía el sitemap: `https://buintel.com/sitemap.xml`

### Google Analytics 4:
1. Ve a https://analytics.google.com
2. Crea una propiedad para `buintel.com`
3. Obtén el ID de medición (G-XXXXXXXXXX)
4. Agrégalo al layout:

```typescript
// app/layout.tsx — agrega dentro de <head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

---

## Checklist Final de Lanzamiento

- [ ] Favicons generados y colocados en `/public/`
- [ ] Imagen Open Graph (`og-image.png`) creada (1200×630px)
- [ ] Build local exitoso (`npm run build`)
- [ ] Desplegado en Vercel sin errores
- [ ] Dominio `buintel.com` conectado y con HTTPS
- [ ] Formulario de contacto probado (redirige a WhatsApp)
- [ ] Links de WhatsApp probados (+52 811 976 2538)
- [ ] Link de correo probado (atencionaclientes@buintel.com)
- [ ] Sitio verificado en Google Search Console
- [ ] Sitemap enviado a Google
- [ ] Prueba en móvil (iOS + Android)
- [ ] Velocidad verificada en https://pagespeed.web.dev

---

## Soporte técnico

¿Problemas con el despliegue? Documentación oficial:
- **Vercel:** https://vercel.com/docs
- **Next.js 15:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
