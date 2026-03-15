

## Plan: Subsección de Infraestructura y DevOps dentro de "¿Qué hacemos?"

### Concepto

Agregar un bloque debajo de las 4 tarjetas actuales con un título como **"También cuidamos lo que no se ve"** y tarjetas de servicios de infraestructura. Tono semi-técnico: mencionar tecnologías clave pero con explicaciones accesibles.

### Cambios en `src/components/WhatWeDo.tsx`

Después del grid de 4 servicios, agregar una subsección con:

**Subtítulo animado**: "También cuidamos lo que no se ve" + bajada: "Con más de 15 años de experiencia en infraestructura IT"

**3 tarjetas de infraestructura** (grid de 3 columnas en desktop):

1. **Servidores y Datacenter**
   - Icono: `Server`
   - Descripción: "Configuración y mantenimiento de servidores Windows y Linux, arreglos RAID, gestión remota con ILO/iDRAC"
   - Hook modal: "¿Tu servidor se cae y nadie sabe por qué?"
   - Expandido: "Configuramos y mantenemos servidores físicos y virtuales con monitoreo proactivo. Experiencia con RAID, ILO, iDRAC, IIS y Nginx."

2. **Redes y Conectividad**
   - Icono: `Wifi`
   - Descripción: "Redes empresariales con Mikrotik, WiFi mesh administrado, VPNs y enlaces de microondas de largo alcance"
   - Hook modal: "¿Tu red es lenta o inestable?"
   - Expandido: "Diseñamos redes robustas con equipos Mikrotik, WiFi mesh, VPNs Endian y enlaces punto a punto para conectar sucursales."

3. **Seguridad IT**
   - Icono: `Shield`
   - Descripción: "Seguridad perimetral, filtros de contenido, DHCP administrado y control de acceso a la red"
   - Hook modal: "¿Sabes quién accede a tu red?"
   - Expandido: "Implementamos firewalls, filtros de contenido, segmentación de red y políticas de seguridad para proteger tu infraestructura."

Las tarjetas usarán el mismo patrón interactivo (click → modal con hook + descripción expandida) y las mismas animaciones de scroll reveal que las existentes.

### Estructura visual

```text
[  4 tarjetas actuales de servicios  ]

── También cuidamos lo que no se ve ──
   +15 años de experiencia en infra IT

[ Servidores ]  [ Redes ]  [ Seguridad ]
```

