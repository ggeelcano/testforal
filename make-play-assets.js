// Genera los assets gráficos exigidos por Play Store
// - feature-graphic.png 1024x500
// - icon-play-512.png 512x512 (ya existe icon-512.png pero Play exige sin transparencia y 32-bit PNG)
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const featureGraphic = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0d2e"/>
      <stop offset="50%" stop-color="#1a1454"/>
      <stop offset="100%" stop-color="#0a0e1a"/>
    </linearGradient>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00d9ff"/>
      <stop offset="100%" stop-color="#00ff88"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="500" fill="url(#bg)"/>

  <!-- Glow -->
  <circle cx="850" cy="250" r="180" fill="url(#g)" opacity="0.12"/>
  <circle cx="200" cy="100" r="120" fill="#00d9ff" opacity="0.08"/>

  <!-- Logo TF -->
  <rect x="80" y="160" width="180" height="180" rx="40" fill="#0a0e1a" stroke="url(#g)" stroke-width="3"/>
  <text x="170" y="265" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="80" fill="url(#g)">TF</text>

  <!-- Texto -->
  <text x="300" y="200" font-family="Arial,sans-serif" font-weight="800" font-size="62" fill="#ffffff">TestForal</text>
  <text x="300" y="252" font-family="Arial,sans-serif" font-weight="600" font-size="28" fill="url(#g)">Oposiciones Diputación Foral Bizkaia</text>
  <text x="300" y="300" font-family="Arial,sans-serif" font-weight="400" font-size="22" fill="#a0a8c0">Tests online · Funciona sin internet</text>

  <!-- Badges -->
  <rect x="300" y="335" width="130" height="38" rx="19" fill="#00d9ff" opacity="0.15" stroke="#00d9ff" stroke-width="1"/>
  <text x="365" y="360" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="16" fill="#00d9ff">+5000 tests</text>

  <rect x="445" y="335" width="160" height="38" rx="19" fill="#00ff88" opacity="0.15" stroke="#00ff88" stroke-width="1"/>
  <text x="525" y="360" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="16" fill="#00ff88">Modo offline</text>

  <rect x="620" y="335" width="160" height="38" rx="19" fill="#ffffff" opacity="0.1" stroke="#ffffff" stroke-width="1"/>
  <text x="700" y="360" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="16" fill="#ffffff">Estadísticas</text>
</svg>`;

async function run() {
  // Feature graphic 1024x500
  await sharp(Buffer.from(featureGraphic))
    .resize(1024, 500)
    .png()
    .toFile(path.join(__dirname, 'play-feature-graphic.png'));
  console.log('✅ play-feature-graphic.png (1024x500)');

  // Play Store icon 512x512 SIN transparencia (Play exige fondo opaco)
  await sharp(path.join(__dirname, 'icon-512.png'))
    .flatten({ background: '#0a0e1a' })
    .png()
    .toFile(path.join(__dirname, 'play-icon-512.png'));
  console.log('✅ play-icon-512.png (512x512, opaco)');
}

run().catch((e) => { console.error(e); process.exit(1); });
