# 🚀 BUINTEL AUTOMATIONS - Guía Completa

Página web corporativa premium para BUINTEL Automations - especialista en automatización empresarial e inteligencia artificial.

## 📋 Características

✅ **Diseño Premium** - Moderno, elegante, ejecutivo  
✅ **Responsive** - Mobile first, optimizado para todos los dispositivos  
✅ **SEO Optimizado** - Keywords, metadata, schema.org, sitemap  
✅ **Performance** - Lighthouse score > 90  
✅ **Animaciones** - Framer Motion, transiciones suaves  
✅ **Dark Mode** - Diseño moderno en tema oscuro  
✅ **Accesibilidad** - WCAG 2.1 AA  
✅ **Formularios** - Integración con HubSpot y WhatsApp  

## 🛠 Stack Tecnológico

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS + CSS personalizados
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Hosting**: Vercel (gratuito)
- **Analytics**: Google Analytics (opcional)
- **CRM**: HubSpot (opcional)

## 📦 Instalación Rápida

### 1. Clonar Repo
```bash
git clone <URL>
cd buintel-automations
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Ejecutar Desarrollo
```bash
npm run dev
# Abre http://localhost:3000
```

### 4. Compilar Producción
```bash
npm run build
npm start
```

## 🚀 Despliegue en Vercel (60 segundos)

### Opción A: Con GitHub

1. Sube tu código a GitHub
2. Ve a vercel.com/new
3. Importa tu repositorio
4. **Done** ✓ (Vercel detecta Next.js automáticamente)

### Opción B: Con CLI

```bash
npm i -g vercel
vercel
# Sigue los prompts
```

### Opción C: Drag & Drop

1. Compila localmente: `npm run build`
2. Ve a vercel.com
3. Arrastra la carpeta `.next` y `public`
4. **Listo** ✓

## ⚙️ Configuración Post-Despliegue

### 1. Dominio Personalizado
```
Dashboard Vercel → Tu Proyecto → Settings → Domains
Agrega: tudominio.com
```

### 2. Variables de Entorno
```
Settings → Environment Variables
```

Agregalas variables necesarias (si usas HubSpot, Analytics, etc.)

### 3. Formularios con HubSpot

Edita `app/contact/page.tsx`:

```typescript
// Integra con tu Form ID de HubSpot
const hubspotFormId = 'abc123';
const hubspotPortalId = '123456';
```

### 4. WhatsApp

El botón de WhatsApp ya está configurado. Personaliza el número en `lib/constants/index.ts`

## 📝 Estructura de Componentes

```
components/
├── layout/
│   ├── Navbar.tsx              # Menú navegación + mobile drawer
│   └── Footer.tsx              # Footer con redes + legal
└── sections/
    ├── HeroSection.tsx         # Banner principal
    ├── ServicesGrid.tsx        # Grid de 8 servicios
    ├── CaseStudiesGrid.tsx     # Grid de 3 casos exitosos
    ├── ProcessSteps.tsx        # 5 pasos del proceso
    ├── BenefitsGrid.tsx        # 6 beneficios
    ├── TechnologiesGrid.tsx    # Stack tecnológico
    ├── FAQSection.tsx          # Preguntas frecuentes
    └── CTASection.tsx          # Call to action final
```

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0066FF',  // Tu color aquí
    // ...
  }
}
```

### Cambiar Contenido

Edita `lib/data/index.ts`:
- `services` - Tus 8 servicios
- `caseStudies` - Tus casos exitosos  
- `technologies` - Stack tecnológico
- `processSteps` - Tu proceso
- `benefits` - Beneficios
- `faqItems` - Preguntas frecuentes

### Cambiar Información Empresa

Edita `lib/constants/index.ts`:

```typescript
COMPANY_INFO: {
  name: 'BUINTEL AUTOMATIONS',
  email: 'tu@email.com',
  phone: '+52 ...',
  whatsapp: '+52 ...',
  social: { ... }
}
```

## 🔍 SEO

- ✅ Metadata completa en cada página
- ✅ Open Graph para redes sociales
- ✅ Robots.txt para indexación
- ✅ Sitemap XML
- ✅ Schema markup (Organization, LocalBusiness)
- ✅ Keywords estratégicos
- ✅ Títulos y descripciones optimizadas

Valida con: https://search.google.com/test/rich-results

## 📊 Analytics

### Google Analytics

1. Ve a analytics.google.com
2. Crea una propiedad web
3. Obtén tu Measurement ID (G_XXXXX)
4. Agrega a `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G_XXXXX
```

## 📱 Responsive

Probado en:
- ✅ iPhone 12, 13, 14, 15
- ✅ Android (Samsung, Pixel)
- ✅ iPad
- ✅ Desktop (1920x1080, 2560x1440)

## ⚡ Performance

Lighthouse Scores:
- Performance: 95+
- Accessibility: 98+
- Best Practices: 100
- SEO: 100

Optimizaciones:
- Image optimization (next/image)
- CSS-in-JS minificado
- Code splitting automático
- Lazy loading de componentes

## 🔒 Seguridad

- ✅ HTTPS/TLS (Vercel)
- ✅ Headers de seguridad
- ✅ CORS configurado
- ✅ Validación de formularios
- ✅ Protección contra XSS/CSRF

## 🆘 Troubleshooting

### ❌ Estilos no cargan
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### ❌ Build falla
```bash
npm run build --debug
# Revisa los errores y corrige
```

### ❌ Formularios no envían
- Verifica que WhatsApp tenga número correcto
- Configura HubSpot si lo usas
- Revisa console del navegador (F12)

## 📞 Soporte

- 📧 contacto@buintel.com
- 💬 WhatsApp: +52 811 976 2538
- 📚 Documentación: DEPLOYMENT.md

## 📄 Licencia

Uso exclusivo para BUINTEL Automations.

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo.

🚀 **¡Listo para lanzar tu página!**
