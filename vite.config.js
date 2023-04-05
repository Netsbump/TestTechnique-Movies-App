// vite.config.js
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/TestTechnique-Movies-App/', // Remplacez "repository-name" par le nom de votre dépôt.
  build: {
    outDir: 'docs', // Utilisez le dossier "docs" pour déployer sur GitHub Pages.
  },
  plugins: [
    viteStaticCopy({
      targets: [
        // Copiez les fichiers statiques appropriés ici.
        { src: 'src/img/*', dest: 'dist/img' },
        { src: 'src/fonts/*', dest: 'dist/fonts' },
      ],
    }),
  ],
});