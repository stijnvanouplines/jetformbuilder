const path = require( 'path' );
const webpack = require( 'webpack' );
const { VueLoaderPlugin } = require( 'vue-loader' );
const { getAllEntries } = require( './webpack.helper' );

module.exports = {
	name: 'js_bundle',
	context: path.resolve( __dirname, 'src' ),
	entry: getAllEntries(),
	output: {
		path: path.resolve( __dirname, 'js' ),
		filename: '[name]',
	},
	devtool: 'eval-source-map',
	resolve: {
		modules: [
			path.resolve( __dirname, 'src' ),
			path.resolve( __dirname, 'blocks-src' ),
			'node_modules',
		],
		extensions: [ '.js', '.vue' ],
		alias: {
			'@': path.resolve( __dirname, 'src/editor' ),
			'@helpers': path.resolve( __dirname, 'src/editor/helpers' ),
			'@components': path.resolve( __dirname, 'src/editor/components' ),
			'@admin': path.resolve( __dirname, 'src/admin' ),
			'@blocks': path.resolve( __dirname, 'blocks-src' ),
		},
	},
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
				],
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
					options: {},
				},
			},
		],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};

if ( process.env.npm_lifecycle_event !== 'dev' ) {
	delete module.exports.devtool;
}