import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'umb14test',
    },
    outDir: '../umb14test/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/umb14test
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});
