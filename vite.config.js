import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   base: '/product_list/', // Replace <repository-name> with your actual repository name
});
