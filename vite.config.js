import {resolve} from 'path';
import {defineConfig} from "vite";

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    plugins: [],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                checkout: resolve(root, 'checkout.html'),
            }
        }
    }
})