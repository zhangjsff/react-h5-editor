var path = require("path");
module.exports = {
    watch : true,
    entry: './example/script/main.js',
    output: {
        // path: './example/',
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
      loaders: [
          { test : /\.(css)$/, loader : 'style!css'},
					{ test: /(\.js|\.jsx)$/, loader: 'babel',query : {
							presets : [
								// 'stage-3',
                "es2015",
                "react",
                "stage-0"
							],
							// "plugins": ["add-module-exports","syntax-decorators"],
						}
					},

				]
     },
     devServer:{
       contentBase: "./example/",
     }
};
