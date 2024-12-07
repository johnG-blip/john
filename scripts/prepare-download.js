import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create necessary directories
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create README.md with installation instructions
const readmeContent = `# Distrimarg Supermercado

## Instalación

1. Clona o descarga este repositorio
2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`
3. Inicia el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

## Estructura del Proyecto

- \`/src\` - Código fuente
  - \`/components\` - Componentes React
  - \`App.tsx\` - Componente principal
  - \`main.tsx\` - Punto de entrada
- \`/public\` - Archivos estáticos (imágenes, videos, audios)

## Requisitos

- Node.js 16 o superior
- npm 7 o superior

## Scripts Disponibles

- \`npm run dev\` - Inicia el servidor de desarrollo
- \`npm run build\` - Construye la aplicación para producción
- \`npm run preview\` - Previsualiza la versión de producción

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (iconos)
`;

fs.writeFileSync('README.md', readmeContent);

// Create .gitignore
const gitignoreContent = `node_modules
dist
.DS_Store
*.local
.env
`;

fs.writeFileSync('.gitignore', gitignoreContent);

// Create placeholder directories for static assets
const directories = ['public/audios', 'public/videos'];
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('Project prepared for download!');