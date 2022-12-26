import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const ourDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
	root,
	plugins: [react()],
	build: {
		ourDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, 'index.html'),
				works: resolve(root, 'works', 'index.html')
			}
		}
	}
})
