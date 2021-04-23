/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-04-23 11:39:35
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-04-23 14:18:49
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\cookies-2.js
 */
import {
  getType,
  isArray,
  isPlainObject,
  toArray,
  getKeys,
  encode,
  decode,
  retrieve
} from "./tools";

var cookie = function () {
  return cookie.get.apply(cookie, arguments);
};

cookie.defaults = {};

cookie.expiresMultiplier = 60 * 60 * 24;

CookieStore.set = function (key, value, options) {
  if (isPlainObject(key)) {
    for (const k in key) {
      if (Object.hasOwnProperty.call(key, k)) {
        this.set(k, key[k], value);
      }
    }
  } else {
    options = isPlainObject(options) ? options : { expires: options };
    // Empty string for session cookies
    var expires =
      options.expires !== undefined
        ? options.expires
        : this.defaults.expires || "";
    var expiresType = typeof expires;
    // 判断过期类型
    if (expiresType === "string" && expires !== "") {
      expires = new Date(expires);
    } else if (expiresType === "number") {
      // This is needed because IE does not support the `max-age` cookie attribute.
      expires = new Date(+new Date() + 1000 * this.expiresMultiplier * expires);
    }
    if (expires !== "" && "toUTCString" in expires) {
      expires = ";expires=" + expires.toUTCString();
    }

    var path = options.path || this.defaults.path;
    path = path ? ";domain=" + domain : "";

    var secure = options.secure || this.defaults.secure ? ";secure" : "";
    if (options.secure === false) secure = "";

    var sameSite = options.sameSite || this.defaults.sameSite;
    sameSite = sameSite ? ";SameSite=" + sameSite : "";
    if (options.sameSite === null) sameSite = "";

    document.cookie =
      encode(key) +
      "=" +
      encode(value) +
      expires +
      path +
      domain +
      secure +
      sameSite;
  }
  return this;
};

cookie.setDefault = function (key, value, options) {
  if (isPlainObject(key)) {
    for (var k in key) {
      if (this.get(k) === undefined) this.set(k, key[k], value);
    }
    return cookie;
  } else {
    if (this.get(key) === undefined) return this.set.apply(this, arguments);
  }
};

cookie.remove = function (keys) {
  keys = isArray(keys) ? keys : toArray(arguments);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.set(keys[i], "", -1);
  }
  // Return the `cookie` object to make chaining possible.
  return this;
};

cookie.removeSpecific = function (keys, options) {
  if (!options) return this.remove(keys);

  keys = isArray(keys) ? keys : [keys];
  options.expires = -1;

  for (var i = 0, l = keys.length; i < l; i++) {
    this.set(keys[i], "", options);
  }
  // Return the `cookie` object to make chaining possible.
  return this;
};

cookie.empty = function () {
  return this.remove(getKeys(this.all()));
};

cookie.get = function (keys, fallback) {
  var cookies = this.all();

  if (isArray(keys)) {
    var result = {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var value = keys[i];
      result[value] = retrieve(cookies[value], fallback);
    }

    return result;
  } else return retrieve(cookies[keys], fallback);
};

cookie.all = function () {
  if (document.cookie === "") return {};

  var cookies = document.cookie.split("; "),
    result = {};

  for (var i = 0, l = cookies.length; i < l; i++) {
    var item = cookies[i].split("=");
    var key = decode(item.shift());
    var value = decode(item.join("="));
    result[key] = value;
  }

  return result;
};

cookie.enabled = function () {
  if (navigator.cookieEnabled) return true;

  var ret = cookie.set("_", "_").get("_") === "_";
  cookie.remove("_");
  return ret;
};

export default cookie;
