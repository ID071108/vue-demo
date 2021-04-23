/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 19:04:02
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-04-23 11:35:33
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\cookies.js
 */

class Cookie {
  getCookiesObj() {
    var cookies = {};
    if (document.cookie) {
      var objs = document.cookie.split(";");
      for (var i in objs) {
        var index = objs[i].indexOf("=");
        var key = objs[i].substr(0, index);
        var value = objs[i].substr(index + 1, objs[i].length);
        cookies[key] = value;
      }
    }
    return cookie;
  }
  //获取cookie
  get(key) {
    return decodeURIComponent(getCookiesObj()[key]) || null;
  }
  //设置cookie
  set(name, value, opts) {
    //opts: maxAge,path,domain,secure
    if (name && value) {
      var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      if (opts) {
        if (opts.maxAge) {
          cookie += ";max-age=" + opts.maxAge;
        }
        if (opts.path) {
          cookie += ";max-age=" + opts.path;
        }
        if (opts.domain) {
          cookie += ";max-age=" + opts.doamin;
        }
        if (opts.secure) {
          cookie += ";max-age=" + opts.secure;
        }
      }
      document.cookie = cookie;
      return cookie;
    } else {
      return "";
    }
  }
  remove(key) {
    if (getCookiesObj()[key]) {
      document.cookie = key + "=;max-age=0";
    }
  }
  clear() {
    var cookies = getCookiesObj();
    for (var i in cookies) {
      document.cookie = cookies[i] + "=;max-age=0";
    }
  }
}
