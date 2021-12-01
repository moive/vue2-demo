const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = MiniCssExtractPlugin.loader;

let Env = "local";

const config = {
	entry: {
		app: "./src/scripts/app/",
	},
	output: {
		path: path.join(__dirname,"..", "public"),
		publicPath: '/',
		filename: "js/[name].js"
		// filename: 'js/dist/js/[name].js?v=[hash]'
	},
	devServer: {
	  open: true,
	  host: "localhost",
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			ENV: JSON.stringify(Env),
		}),
	  // new HtmlWebpackPlugin({
	  //   template: "index.html",
	  // }),
  
	  // new MiniCssExtractPlugin(),
  
	  // Add your plugins here
	  // Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
	  rules: [
		{ 
			test: /\.ts$/, 
			loader: 'ts-loader',   
			exclude: /node_modules\/(?!@pictoric\/fb-components)|vue\/src/,
			options: {
				appendTsSuffixTo: [/\.vue$/],
				//configFile:"buildJs/tsconfig.app.json",
				transpileOnly: true
			}
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				esModule: true
			}
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				//useRelativePath:true,
				emitFile:false,
			}
		},
		{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				'css-loader'
			]
		},
	  ],
	},
	optimization: {
		// minimize: true,
		// minimizer: [new TerserPlugin()],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		enforceExtension: false,
		alias: {
			'vue$': 'vue/dist/vue.common.js',
		}
	},
	externals: {
		"lodash": {
			commonjs: "lodash",
			commonjs2: "lodash",
			amd: "lodash",
			root: "_"
		},
		"jquery": "jQuery",
		"vue": "Vue",
		"vue-router": "VueRouter",
		"vuex": "Vuex",
		// "vuetify":"Vuetify",
		"ss-utils": "ss-utils",
		"moment": "moment",
		"axios": "axios",
		"bootstrap-vue":"BootstrapVue"
	},
  };
  
  module.exports = () => {
	if (isProduction) {
	  config.mode = "production";
	} else {
	  config.mode = "development";
	}
	return config;
  };