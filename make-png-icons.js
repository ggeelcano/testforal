// Genera PNGs reales para Play Store / TWA desde el SVG base
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgBase = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00d9ff"/>
      <stop offset="100%" stop-color="#00ff88"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="#0a0e1a"/>
  <rect x="${size * 0.04}" y="${size * 0.04}" width="${size * 0.92}" height="${size * 0.92}" rx="${size * 0.2}" fill="url(#g)" opacity="0.15"/>
  <text x="${size / 2}" y="${size * 0.43}" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="${size * 0.24}" fill="url(#g)">TF</text>
  <text x="${size / 2}" y="${size * 0.68}" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="${size * 0.094}" fill="#e4e7ee">TestForal</text>
  <circle cx="${size / 2}" cy="${size * 0.79}" r="${size * 0.026}" fill="#00ff88"/>
</svg>`;

// Icono maskable: solo TF, sin texto, padding 20% (zona segura Android)
const svgMaskable = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00d9ff"/>
      <stop offset="100%" stop-color="#00ff88"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="#0a0e1a"/>
  <text x="${size / 2}" y="${size * 0.6}" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="${size * 0.32}" fill="url(#g)">TF</text>
</svg>`;

async function run() {
  const sizes = [
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'icon-maskable-192.png', size: 192, maskable: true },
    { name: 'icon-maskable-512.png', size: 512, maskable: true },
    { name: 'icon-1024.png', size: 1024 },
  ];

  for (const { name, size, maskable } of sizes) {
    const svg = maskable ? svgMaskable(size) : svgBase(size);
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, name));
    console.log(`✅ ${name}`);
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
