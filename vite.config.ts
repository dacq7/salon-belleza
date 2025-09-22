import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Configuración de Vite para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/salon-belleza/", // 👈 nombre exacto del repositorio en GitHub
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

