# Alpine Spanish Plus

Fork en español del tema [Alpine](https://github.com/nuxt-themes/alpine) de Nuxt, empaquetado como capa reutilizable para sitios basados en Nuxt Content.

## Características

- Capa de tema Nuxt: extiende configuración, layouts, componentes, estilos y utilidades
- Traducciones y adaptaciones al español
- Starter interno en `.starters/default` para validación de build

## Instalación

```bash
npm install @4verburga/alpine-spanishplus
```

Luego extiende tu proyecto en `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@4verburga/alpine-spanishplus'
})
```

## Desarrollo local

```bash
pnpm install
pnpm dev       # Levanta el starter interno
pnpm build     # Compila el starter interno
```

### Probar cambios sin publicar en npm

**Opción 1: tarball (recomendada)**

```bash
# En este repo
pnpm pack

# En tu proyecto consumidor
npm install ../nuxt-alpine-spanishplus/<archivo-generado>.tgz
```

**Opción 2: dependencia local por ruta**

En el `package.json` de tu proyecto consumidor, usa una dependencia tipo `file:` apuntando a este repo e instala dependencias.

**Opción 3: link local**

Vincula el paquete con `pnpm link` y úsalo como dependencia enlazada en tu proyecto.

## CI/CD

| Workflow | Archivo | Rama | Descripción |
|---|---|---|---|
| ci-main | `.github/workflows/ci.yml` | `main` | Valida build en push y PR |
| ci-dev | `.github/workflows/ci-dev.yml` | `dev` | Valida build en push y PR |
| publish | `.github/workflows/publish.yml` | `main` | Publica en npm como `latest` |
| publish-dev | `.github/workflows/publish-dev.yml` | `dev` | Publica en npm con sufijo `-dev` y dist-tag `dev` |
| studio | `.github/workflows/studio.yml` | `main` | Genera sitio estático y despliega a GitHub Pages |

## Licencia

[MIT](./LICENSE)
