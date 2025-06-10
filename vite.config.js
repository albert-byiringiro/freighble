import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // set up a proxy to serve vendors' API
    server: {
        proxy: {
            "/api": "http://localhost:8080",
        },
    },
});
