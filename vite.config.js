// Consult https://vitejs.dev/config/ to learn about these options
import { resolve } from 'path';

export default {
	resolve: {
		alias: {
			$components: resolve('src/app/components'),
			$utils: resolve('src/app/utils'),
			$pages: resolve('src/app/pages'),
			$layout: resolve('src/app/layouts'),
			$graphql: resolve('src/app/graphql')
		},
		build: {
			sourceMap: false,
		}
	}
};
