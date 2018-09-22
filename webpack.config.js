module.exports = {
	entry: "./docs/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/docs_dist"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },

			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},

	devServer: {
		contentBase: "./docs_dist"
	},

	mode: "development"
};
