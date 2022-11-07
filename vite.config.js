import { defineConfig } from "vite";
const { resolve } = require('path');
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            "@": resolve("./resources/js"),
            "@src": resolve("./resources"),
        },
    },
});
