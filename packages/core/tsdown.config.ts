import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  fixedExtension: false,
  target: 'es2022',
  format: 'esm',
    entry: [
    'src/framework/*',
    'src/{toc,link,breadcrumb,dynamic-link}.tsx',
  ],
});
