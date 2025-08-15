import tailwindcssPlugin from '@tailwindcss/vite';
import viteReactPlugin from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import viteConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  build: {
    reportCompressedSize: false,
    commonjsOptions: { transformMixedEsModules: true },
  },
  plugins: [
    tailwindcssPlugin(),
    viteConfigPaths(),
    viteReactPlugin(),
    // eslint-disable-next-line no-undef
    process.env.INLINE ? viteSingleFile() : null,
  ].filter(Boolean),
});
