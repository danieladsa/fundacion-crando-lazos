# 🌐 Fundación Creando Lazos — Sitio Web

Sitio web desarrollado con **Next.js**, **TypeScript** y **TailwindCSS**, exportado como HTML/CSS/JS estático.  
Permite desplegarlo fácilmente en cualquier hosting o servicio gratuito (como Vercel, Netlify o GitHub Pages).

---

## 🚀 Cómo ejecutar

1. Instala dependencias:
   ```bash
   npm install
   ```

...existing code...

2. Exportar el sitio como estático (HTML/CSS/JS)

   Ejecuta el script de build (debe estar configurado en package.json para ejecutar next build && next export):
   ```bash
   npm run build
   ```

   - Por defecto la exportación genera la carpeta `out/` con los archivos estáticos.
   - Si `npm run build` no incluye `next export`, puedes ejecutar directamente:
     ```bash
     npx next build && npx next export
     ```

   Para previsualizar localmente los archivos exportados:
   ```bash
   npx serve out
   # o
   npx http-server out -p 3000
   ```
