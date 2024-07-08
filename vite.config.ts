import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import "src/styles/mixins/hover.scss";
				`,
      },
    },
  },
});
