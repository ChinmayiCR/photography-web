import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs';
// https://vite.dev/config/
export default defineConfig(({command}) => {
    const hasLocalCerts = fs.existsSync('./src/key.pem') && fs.existsSync('./src/cert.pem');
    const apiProxyTarget = "https://eyeshade-photography-183236936603.us-central1.run.app";

    return {
        plugins: [tailwindcss(),
            react()],
        server: {
            https: command === 'serve' && hasLocalCerts
                ? {
                    key: fs.readFileSync('./src/key.pem'),
                    cert: fs.readFileSync('./src/cert.pem'),
                }
                : undefined,
            port: 3000,
            proxy: {
                "/api": {
                    target: apiProxyTarget,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        }
    };
})
