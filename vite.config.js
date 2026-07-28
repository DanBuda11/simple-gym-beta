import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Simple Gym',
        short_name: 'Simple Gym',
        description: "Dan Buda's Simple Workout App",

        lang: 'en',

        start_url: '/',
        scope: '/',

        display: 'standalone',

        theme_color: '#ffffff',
        background_color: '#ffffff',

        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
