const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "tic-tac-toe.bundle.js",
	},
	plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
	mode: "production",
};
