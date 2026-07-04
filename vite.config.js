import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
// Served from https://philbergdorf.github.io/migronline/ on GitHub Pages,
// so the production build needs that base path. Local dev stays at "/".
export default defineConfig(function (_a) {
    var command = _a.command;
    return ({
        base: command === 'build' ? '/migronline/' : '/',
        plugins: [react()],
    });
});
