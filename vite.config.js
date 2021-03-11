// Consult https://vitejs.dev/config/ to learn about these options
import { resolve } from 'path';

export default {
	resolve: {
		alias: {
			$components: resolve('src/app/components'),
			$utils: resolve('src/app/_utils'),
			$css: resolve('src/routes/main.css'),
			$layouts: resolve('src/app/_layouts'),
		},
		build: {
			sourceMap: false,
		}
	}
};
