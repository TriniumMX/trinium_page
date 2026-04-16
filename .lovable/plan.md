

## Plan: Mejorar formato del correo de Web3Forms

### Problema
Los campos llegan pegados sin separación: `NameIsraEmailelflaco@gmail.comMessageTest...`. Esto pasa porque Web3Forms genera el correo a partir de los nombres de los campos y su contenido sin saltos visibles entre ellos.

### Solución
Web3Forms soporta dos parámetros especiales que mejoran el correo recibido:

1. **Renombrar campos con etiquetas legibles** (con espacios y emojis para que se vean separados en el correo):
   - `name` → `"👤 Nombre"`
   - `email` → `"✉️ Email o teléfono"`
   - `message` → `"💬 Mensaje"`

2. **Agregar campos especiales de Web3Forms**:
   - `subject: "Nuevo contacto desde TRINIUM - {nombre}"` → asunto personalizado por cada envío.
   - `from_name: "Web TRINIUM"` (ya está).
   - `replyTo`: el email/contacto del visitante → así puedes responder directo desde Gmail al cliente.
   - `botcheck: ""` → honeypot anti-spam (campo oculto que bots llenan, Web3Forms los rechaza).

### Cambios en `src/components/ContactModal.tsx`

Reescribir el `body` del `fetch` en `handleSubmit`:

```ts
body: JSON.stringify({
  access_key: WEB3FORMS_ACCESS_KEY,
  subject: `Nuevo contacto desde TRINIUM — ${result.data.name}`,
  from_name: "Web TRINIUM",
  replyTo: result.data.contact,
  botcheck: "",
  "👤 Nombre": result.data.name,
  "✉️ Email o teléfono": result.data.contact,
  "💬 Mensaje": result.data.message,
})
```

### Resultado esperado en el correo

```text
Asunto: Nuevo contacto desde TRINIUM — Isra

👤 Nombre: Isra
✉️ Email o teléfono: elflaco@gmail.com
💬 Mensaje: Test de envio de correo
```

Cada campo en su línea, con etiqueta clara y al darle "Responder" en Gmail va directo al cliente.

### Nota
No se cambia nada de UI ni del flujo de envío. Solo se ajusta cómo se nombran los campos en el payload para que Web3Forms los renderice ordenados.

