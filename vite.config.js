import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/react_tooltip/', // replace <REPOSITORY_NAME> with your actual repo name
});
