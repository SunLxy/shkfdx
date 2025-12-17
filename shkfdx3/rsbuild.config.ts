import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  output: {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/private_shkfdx/' : '/',
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
    base: "/private_shkfdx",
  },
  html: {
    title: '刷题',
  },
});
