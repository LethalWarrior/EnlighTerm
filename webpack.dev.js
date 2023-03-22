const { merge } = require('webpack-merge');
const common = reqire('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
});
