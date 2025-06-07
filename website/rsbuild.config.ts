import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  output: {
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/shkfdx/' : '/',
    distPath: {
      root: "build"
    }
  },
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    // base: "/shkfdx",
  }
});
