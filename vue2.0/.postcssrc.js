/*
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-25 19:47:24
 * @LastEditors: shuwang_wu
 * @Description: postcss config
 * @FilePath: \vue2.0\.postcssrc.js
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // options
    }
  }
}
