

## Plan: CTA de contacto con WhatsApp + Formulario (CRO optimizado)

### Concepto

Reemplazar el botón estático "Contáctanos" con un sistema dual que maximiza conversión: al hacer clic se abre un modal con dos opciones claras — **WhatsApp** (acción rápida, alta conversión en LATAM) y **Formulario de contacto** (captura de leads).

### Mejores prácticas CRO aplicadas

- **Reducir fricción**: WhatsApp abre con mensaje prellenado, el formulario es mínimo (nombre, email/teléfono, mensaje)
- **Urgencia social**: Mostrar "Respondemos en menos de 24 hrs" como refuerzo
- **Dos caminos**: Usuarios que prefieren inmediatez → WhatsApp. Usuarios que prefieren dejar datos → formulario
- **No sacar al usuario de la página**: Todo dentro de un modal
- **Validación con Zod**: Inputs seguros y con feedback claro

### Cambios técnicos

1. **Crear `src/components/ContactModal.tsx`**
   - Modal con dos pestañas/opciones: "WhatsApp" y "Formulario"
   - Opción WhatsApp: botón que abre `https://wa.me/529991234567?text=...` con mensaje prellenado
   - Opción Formulario: campos nombre, email, teléfono (opcional), mensaje con validación Zod
   - El formulario usa `mailto:hola@trinium.com.mx` con los datos o muestra un toast de confirmación
   - Indicador de tiempo de respuesta: "Respondemos en menos de 24 hrs"

2. **Actualizar `src/components/FinalCTA.tsx`**
   - Integrar el modal al botón "Contáctanos"
   - Cambiar texto del botón a algo más orientado a acción: "Escríbenos ahora"

3. **Actualizar `src/components/Header.tsx`**
   - El botón "Hablemos" del header también abrirá el mismo modal en lugar de solo hacer scroll

### Estructura del modal

```text
┌──────────────────────────────┐
│       ¿Cómo prefieres        │
│        contactarnos?         │
│                              │
│  ┌─────────┐  ┌───────────┐  │
│  │WhatsApp  │  │ Formulario│  │
│  │  (icon)  │  │  (icon)   │  │
│  │ Escribe  │  │  Déjanos  │  │
│  │  ahora   │  │ tus datos │  │
│  └─────────┘  └───────────┘  │
│                              │
│  Respondemos en < 24 hrs ⚡  │
└──────────────────────────────┘
```

Al elegir "Formulario" se expande/cambia a:

```text
┌──────────────────────────────┐
│     Cuéntanos tu proyecto    │
│  ┌────────────────────────┐  │
│  │ Nombre                 │  │
│  ├────────────────────────┤  │
│  │ Email o teléfono       │  │
│  ├────────────────────────┤  │
│  │ ¿En qué te ayudamos?  │  │
│  └────────────────────────┘  │
│  [ Enviar mensaje ]          │
│  Respondemos en < 24 hrs ⚡  │
└──────────────────────────────┘
```

> **Nota**: Sin backend conectado, el formulario generará un `mailto:` con los datos formateados. Si en el futuro conectas Supabase, se puede guardar en base de datos.

