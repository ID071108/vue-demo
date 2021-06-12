/*
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-26 14:31:43
 * @LastEditors: shuwang_wu
 * @Description: postcss config
 * @FilePath: \vue2.0\.postcssrc.js
 */
// https://github.com/michael-ciniawsky/postcss-load-config
// 'postcss-px-to-viewport': {
//   // options
// },
// 'postcss-pxtorem': {
//   // options
// }

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    
  }
}
