/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-04-23 11:52:21
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-04-23 11:54:34
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\tools.js
 */
export const getType = function (value) {
  return Object.prototype.toString.call(value);
};
// Is the given value an array? Use ES5 Array.isArray if it's available.
export const isArray =
  Array.isArray ||
  function (value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  };
// Is the given value a plain object / an object whose constructor is `Object`?
export const isPlainObject = function (value) {
  return !!value && Object.prototype.toString.call(value) === "[object Object]";
};
// Convert an array-like object to an array – for example `arguments`.
export const toArray = function (value) {
  return Array.prototype.slice.call(value);
};
// Get the keys of an object. Use ES5 Object.keys if it's available.
export const getKeys =
  Object.keys ||
  function (obj) {
    var keys = [],
      key = "";
    for (key in obj) {
      if (obj.hasOwnProperty(key)) keys.push(key);
    }
    return keys;
  };
// Unlike JavaScript's built-in escape functions, this method
// only escapes characters that are not allowed in cookies.
export const encode = function (value) {
  return String(value).replace(/[,;"\\=\s%]/g, function (character) {
    return encodeURIComponent(character);
  });
};
export const decode = function (value) {
  return decodeURIComponent(value);
};
// Return fallback if the value is not defined, otherwise return value.
export const retrieve = function (value, fallback) {
  return value == null ? fallback : value;
};
