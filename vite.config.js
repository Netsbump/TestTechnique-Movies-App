// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/TestTechnique-Movies-App/', // Remplacez "repository-name" par le nom de votre dépôt.
  build: {
    outDir: 'docs', // Utilisez le dossier "docs" pour déployer sur GitHub Pages.
  },
});