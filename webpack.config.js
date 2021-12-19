const path = require('path');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js'],
	},
};