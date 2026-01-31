

## Plan: Hacer Interactiva la Sección "¿Cómo trabajamos?"

### Situacion Actual
Los círculos de cada paso tienen un efecto hover (escala) pero al hacer clic no sucede nada. Siguiendo el mismo enfoque que implementamos en "¿Qué hacemos?", podemos agregar interactividad con modales persuasivos.

### Propuesta

Cada paso del proceso se vuelve clickeable y muestra un modal con contenido expandido usando copywriting:

**1. Te escuchamos**
- Hook: "¿Cansado de que no te entiendan?"
- Mensaje: "No solo escuchamos tus palabras, entendemos tu problema real. Hacemos las preguntas correctas para darte exactamente lo que necesitas."
- Tono: Empatía y conexión

**2. Lo hacemos simple**
- Hook: "¿La tecnología te parece complicada?"
- Mensaje: "Nosotros hablamos tu idioma. Sin tecnicismos, sin jerga confusa. Te explicamos todo de forma clara para que siempre sepas qué está pasando."
- Tono: Tranquilidad

**3. Lo construimos**
- Hook: "¿Has tenido malas experiencias con proyectos?"
- Mensaje: "Cada línea de código la escribimos pensando en ti. Con atención al detalle, probando todo antes de entregarlo. Nada sale de aquí sin estar perfecto."
- Tono: Confianza y profesionalismo

**4. Te acompañamos**
- Hook: "¿Te han dejado solo después de entregar?"
- Mensaje: "No desaparecemos cuando termina el proyecto. Estamos aquí para resolver dudas, hacer ajustes y crecer contigo. Somos tu equipo de tecnología."
- Tono: Compromiso a largo plazo

### Cambios Tecnicos

1. **Expandir la estructura de datos** de cada paso con:
   - `hook`: Pregunta que conecta con un dolor
   - `expandedDescription`: Mensaje persuasivo completo
   - `cta`: Llamado a la accion personalizado

2. **Agregar interactividad**:
   - Los circulos seran botones clickeables
   - Estado `selectedStep` para controlar el modal
   - Efecto visual mejorado al hover (pulse suave o glow)

3. **Dialog con estilo consistente**:
   - Mismo patron que usamos en WhatWeDo
   - Icono del paso en el encabezado
   - CTA que lleva al contacto

4. **Numero de paso visible**:
   - Agregar un indicador de numero (1, 2, 3, 4) en cada circulo o como badge
   - Refuerza la idea de proceso/flujo

### Resultado Esperado
Los visitantes podran hacer clic en cualquier paso para entender mejor que significa trabajar con Trinium, recibiendo mensajes que generan confianza y demuestran que cada etapa tiene un proposito claro.

