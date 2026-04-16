

## Plan: Integrar Web3Forms con tu access_key

### Cambios en `src/components/ContactModal.tsx`

1. **Constante** al inicio del archivo:
   ```
   const WEB3FORMS_ACCESS_KEY = "01f92a66-783e-4427-93ec-e042113ad373";
   ```

2. **Nuevo estado** `isSubmitting` para deshabilitar el botón durante el envío.

3. **Reescribir `handleSubmit`** (async):
   - Validar con Zod (sin cambios).
   - `fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key, name, email: contact, message, subject: "Nuevo contacto desde TRINIUM", from_name: "Web TRINIUM" }) })`.
   - Si `data.success === true` → `setView("success")` + limpiar form.
   - Si falla → toast de error: "No pudimos enviar tu mensaje. Intenta por WhatsApp."
   - `finally` → `setIsSubmitting(false)`.

4. **Botón "Enviar mensaje"**:
   - `disabled={isSubmitting}`.
   - Mientras envía: ícono `Loader2` con `animate-spin` + texto "Enviando...".
   - En reposo: ícono `Send` + texto "Enviar mensaje" (igual que ahora).

5. **Bug menor que aprovecho a corregir**: en el `Textarea` la clase está mal concatenada (`errors.message ? "border-destructive" : "" + " min-h-[100px]"`) — el `min-h` solo aplica cuando NO hay error. Lo dejo como `cn("min-h-[100px]", errors.message && "border-destructive")`.

### Resultado
Llenar form → "Enviando..." → email llega directo a `hola@trinium.com.mx` → pantalla de éxito. Sin Outlook, sin BD, sin Lovable Cloud, funciona en preview y en Vercel.

