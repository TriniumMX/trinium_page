

## Plan: Logo dinámico para modo oscuro en Header

### Problema
El logo actual (`trinium-logo.png`) desaparece en modo oscuro. Ya existe `trinium-logo-dark.png` en assets.

### Cambios

**`src/components/Header.tsx`**:
1. Importar `trinium-logo-dark.png` y `useTheme` de `next-themes`
2. Obtener el tema actual con `const { resolvedTheme } = useTheme()`
3. Mostrar ambos logos superpuestos con clases `dark:hidden` y `hidden dark:block` para evitar flash (no depender de JS para el swap)

Mismo enfoque se debe aplicar en cualquier otro componente que use el logo (Footer, Hero). Verificaré si también lo usan.

