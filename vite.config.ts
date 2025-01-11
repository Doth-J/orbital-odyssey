import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gallery/orbital-odyssey",
  server: {
    port: 3000,
  },
});
