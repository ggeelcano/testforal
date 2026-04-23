// Genera iconos PNG sencillos (192 y 512) con canvas de node-canvas... o SVG inline
// Para evitar dependencias extra, generamos PNG con datos crudos simples
const fs = require('fs');
const path = require('path');

// Genera un PNG sólido con texto centrado usando solo Node sin deps.
// Aproximación: crear un SVG y convertirlo con una librería… pero sin deps.
// Alternativa: usar `sharp` si está instalada, si no, dejamos SVG como fallback
// y los registramos en manifest como image/svg+xml.

// Vamos a generar SVG base64 y lo guardamos como .png "falso"... no, rompería.
// Mejor: generamos SVG de verdad y actualizamos manifest.json para usar SVG.

const svg192 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00d9ff"/>
      <stop offset="100%" stop-color="#00ff88"/>
    </linearGradient>
  </defs>
  <rect width="192" height="192" rx="42" fill="#0a0e1a"/>
  <rect x="8" y="8" width="176" height="176" rx="38" fill="url(#g)" opacity="0.15"/>
  <text x="96" y="82" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="46" fill="url(#g)">TF</text>
  <text x="96" y="130" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="600" font-size="18" fill="#e4e7ee">TestForal</text>
  <circle cx="96" cy="152" r="5" fill="#00ff88"/>
</svg>`;

const svg512 = svg192.replace('viewBox="0 0 192 192"', 'viewBox="0 0 192 192"'); // mismo svg, se escala

fs.writeFileSync(path.join(__dirname, 'icon-192.svg'), svg192);
fs.writeFileSync(path.join(__dirname, 'icon-512.svg'), svg512);

console.log('✅ SVG icons generados');
