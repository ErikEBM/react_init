var path = require("path");
var outpath = path.join(__dirname, "bundle");

module.exports = {
    entry: [
        './src/app.js'
    ],
    output:{
        path: outpath,
        filename: 'bundle.js'


    },
    module:{
        loaders:[ 
            {
                test: /\.js*/,
                include: path.join(__dirname, 'src'),
                loaders: ['react-hot-loader/webpack', 'babel']
            }
        ]
    }
}