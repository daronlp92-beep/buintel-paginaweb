# 📖 Guía de Implementación Avanzada - BUINTEL

Esta guía te ayudará a conectar servicios externos y completar la implementación.

## 1️⃣ Conectar Formularios con HubSpot CRM

### Paso 1: Crear Cuenta HubSpot (Gratis)

1. Ve a hubspot.com/free/crm
2. Registrate con tu email
3. Confirma tu email

### Paso 2: Obtener Credenciales

1. Dashboard HubSpot → Settings → Integrations → Private Apps
2. Crea una "Private App"
3. Dale permisos: `crm.objects.contacts.write`, `crm.objects.deals.write`
4. Copia el **Access Token**

### Paso 3: Crear Formulario en HubSpot

1. Marketing → Forms → Create Form
2. Agrega campos: Name, Email, Company, Phone, Message
3. Anota el **Form ID** (en la URL o en Embed)
4. Anota el **Portal ID** (en Settings)

### Paso 4: Configurar en la App

Edita `app/contact/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { ContactFormData } from '@/lib/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Enviar a HubSpot
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}/${process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.name.split(' ')[0] },
              { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') },
              { name: 'company', value: formData.company },
              { name: 'email', value: formData.email },
              { name: 'phone', value: formData.phone },
              { name: 'message', value: formData.message },
            ],
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ... resto del componente
}
```

### Paso 5: Configurar Variables de Entorno

En `.env.local`:

```env
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
NEXT_PUBLIC_HUBSPOT_FORM_ID=abc-def-ghi
```

En Vercel (Dashboard → Settings → Environment Variables):

```
Agrega las mismas variables
```

---

## 2️⃣ Integrar WhatsApp Business API

### Opción A: Con Meta Business (Recomendado)

1. Ve a developers.facebook.com
2. Crea una aplicación de negocio
3. Agregar producto → WhatsApp
4. Conecta tu número de WhatsApp
5. Obtén tu **Access Token** y **Phone Number ID**

### Opción B: Con Twilio (Más fácil)

1. Ve a twilio.com
2. Registrate (incluye créditos gratis)
3. Obtén tu **Account SID** y **Auth Token**
4. Habilita WhatsApp en tu cuenta
5. Conecta tu número

### Implementar Webhook

Crea `app/api/whatsapp/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { phone, message } = await request.json();

  try {
    // Con Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      auth: {
        username: accountSid,
        password: authToken,
      },
      body: new URLSearchParams({
        From: `whatsapp:${twilioPhone}`,
        To: `whatsapp:${phone}`,
        Body: message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
```

---

## 3️⃣ Google Analytics

### Configuración Automática

El sitio ya tiene soporte para Google Analytics. Solo agrega tu ID:

```env
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
```

### Verificar que Funciona

1. Abre tu sitio en desarrollo
2. Abre DevTools (F12) → Network
3. Busca requests a `google-analytics.com`
4. Deberías ver requests exitosos

### Acceder a Analytics

1. analytics.google.com
2. Ve a tu propiedad
3. Realtime → Active Users
4. Deberías ver tu sesión

---

## 4️⃣ Optimizar Imágenes

### Reemplazar Placeholders

En `components/sections/CaseStudiesGrid.tsx`:

```typescript
// De:
<div className="h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
  Caso de Éxito: {caseStudy.title}
</div>

// A:
<Image
  src={caseStudy.image}
  alt={caseStudy.title}
  width={600}
  height={400}
  className="w-full h-48 object-cover"
/>
```

### Optimizar Logo

1. Coloca tu logo en `/public/logo.png`
2. En `components/layout/Navbar.tsx`:

```typescript
// De:
<div className="w-10 h-10 rounded-lg bg-gradient-to-br ...">B</div>

// A:
<Image src="/logo.png" alt="BUINTEL" width={40} height={40} />
```

---

## 5️⃣ Personalizar Contenido

### Servicios

Edita `lib/data/index.ts`:

```typescript
export const services: Service[] = [
  {
    id: 'tu-servicio',
    icon: 'Zap',
    title: 'Tu Servicio',
    description: 'Descripción del servicio',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // ... más servicios
];
```

### Casos de Éxito

```typescript
export const caseStudies: CaseStudy[] = [
  {
    id: 'tu-caso',
    title: 'PROYECTO EXITOSO',
    subtitle: 'Sistema Automatizado...',
    description: 'Descripción del proyecto...',
    image: '/images/cases/tu-caso.jpg',
    results: [
      {
        metric: 'Métrica',
        value: '85%',
        label: 'Descripción',
      },
      // ...
    ],
    technologies: ['n8n', 'Python', 'Azure'],
  },
  // ... más casos
];
```

### Información de Empresa

```typescript
export const COMPANY_INFO = {
  name: 'BUINTEL AUTOMATIONS',
  email: 'contacto@buintel.com',
  phone: '+52 811 976 2538',
  whatsapp: '+52 811 976 2538',
  address: 'México',
  // ...
};
```

---

## 6️⃣ Despliegue Final

### 1. Probar Localmente

```bash
npm run build
npm start
# Visita http://localhost:3000
# Abre DevTools → Lighthouse → Analyze
```

### 2. Desplegar en Vercel

```bash
vercel --prod
# O desde GitHub: Vercel detecta cambios automáticamente
```

### 3. Configurar Dominio

```
Vercel Dashboard → Tu Proyecto → Settings → Domains
Agrega: tudominio.com
Sigue instrucciones para actualizar DNS
```

### 4. Verificar SEO

- Abre https://tudominio.com/robots.txt
- Abre https://tudominio.com/sitemap.xml
- Ve a Google Search Console
- Envía sitemap: Sitemaps → Agrega URL

### 5. Verificar Analytics

- analytics.google.com
- Verifica que se registren las sesiones
- Espera 24h para datos completos

---

## 7️⃣ Monitoreo Post-Lanzamiento

### KPIs a Monitorear

- Visitors únicos por mes
- Bounce rate (< 50% es bueno)
- Conversion (formularios completados)
- Top pages
- Traffic source
- Device breakdown

### Auditorías Regulares

```bash
# Lighthouse (mensual)
npm run build
# Abre en Chrome → F12 → Lighthouse → Analyze

# Google PageSpeed Insights (semanal)
# Ve a: pagespeed.web.dev

# SEO Audit (mensual)
# Ve a: Google Search Console
```

---

## 🆘 Problemas Comunes

### ❌ Formularios no envían a HubSpot

**Solución:**
- Verifica que Portal ID y Form ID sean correctos
- Revisa que las variables de entorno estén configuradas
- Abre console (F12) y busca errores CORS
- Verifica que tu IP no esté bloqueada

### ❌ Imágenes se ven borrosas

**Solución:**
- Optimiza imágenes antes de subir (1200x630px para OG)
- Usa `next/image` en lugar de `<img>`
- Comprime con: tinypng.com o imageoptim.com

### ❌ La página se ve lenta

**Solución:**
- Ejecuta Lighthouse
- Identifica recursos grandes
- Lazy load componentes pesados
- Optimiza fuentes (solo las necesarias)

### ❌ Errores 404 en producciónes

**Solución:**
- Verifica que los archivos `page.tsx` existan
- No uses rutas dinámicas sin `[id].tsx`
- Revisa que la estructura de carpetas sea correcta

---

## ✅ Checklist Pre-Lanzamiento

- [ ] Contenido personalizado (servicios, casos, empresa)
- [ ] Logo y colores actualizados
- [ ] Formularios conectados con HubSpot
- [ ] WhatsApp Business configurado
- [ ] Analytics Google configurado
- [ ] Dominio personalizado configurado
- [ ] SSL/HTTPS habilitado
- [ ] Lighthouse Score > 90
- [ ] Probado en mobile y desktop
- [ ] Todos los links funcionando
- [ ] Meta tags y OG personalizados
- [ ] Sitemap generado y enviado a Google
- [ ] Google Search Console verificado
- [ ] Redirects configurados (si migras desde otro sitio)

---

## 📞 Soporte

- 📧 contacto@buintel.com
- 💬 WhatsApp: +52 811 976 2538
- 📚 Documentación: README.md, DEPLOYMENT.md

---

**¡Tu página está lista para conquistar!** 🚀
