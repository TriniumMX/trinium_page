
## Plan: Hacer Interactivas las Tarjetas de "¿Qué hacemos?"

### Problema Actual
Las tarjetas tienen efectos visuales al pasar el mouse (hover), pero al hacer clic no sucede nada. Esto puede frustrar al visitante que espera interactividad.

### Solución Propuesta
Agregar un modal/diálogo que se abre al hacer clic en cada tarjeta, con contenido persuasivo usando técnicas de copywriting.

### Contenido de Cada Tarjeta (expandido)

**1. Desarrollo de herramientas digitales**
- Hook: "¿Tu negocio depende de Excel o papel?"
- Mensaje: "Creamos apps y sistemas a tu medida. Fáciles de usar, que realmente resuelven tus problemas del día a día."
- CTA: "Cuéntanos tu reto"

**2. Sistemas para organización**
- Hook: "¿Pierdes tiempo buscando información?"
- Mensaje: "Diseñamos plataformas donde todo está en su lugar. Encuentra lo que necesitas en segundos, no en horas."
- CTA: "Organicemos tu mundo"

**3. Soluciones en la nube**
- Hook: "¿Te preocupa perder tu información?"
- Mensaje: "Tu información segura, accesible desde cualquier lugar. Sin miedo a que algo se borre o se pierda."
- CTA: "Protege tu negocio"

**4. Automatizaciones inteligentes**
- Hook: "¿Cuántas horas pierdes en tareas repetitivas?"
- Mensaje: "Automatizamos lo tedioso para que tú te enfoques en lo importante. Más tiempo, menos estrés."
- CTA: "Ahorra tiempo ahora"

### Cambios Técnicos

1. **Actualizar tipo de servicio** con campos adicionales:
   - `hook`: Pregunta que genera curiosidad
   - `expandedDescription`: Mensaje más detallado
   - `cta`: Llamado a la acción

2. **Agregar estado y modal** al componente:
   - Estado `selectedService` para el servicio seleccionado
   - Dialog de shadcn/ui para mostrar el contenido expandido

3. **Mejorar las tarjetas**:
   - Agregar `cursor-pointer`
   - Pequeño indicador visual de "Ver más" o ícono sutil
   - Animación suave al abrir el modal

4. **Diseño del modal**:
   - Hook como título llamativo
   - Descripción expandida con el mensaje persuasivo
   - Botón CTA que lleva al formulario de contacto

### Resultado Esperado
Cada tarjeta será clickeable y mostrará un mensaje personalizado que conecta emocionalmente con el visitante, usando preguntas que identifican sus problemas y ofreciendo soluciones claras con un llamado a la acción directo.
