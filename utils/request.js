import Promise from '../plugin/es6-promise';

export default class Request {
  // 微信请求的默认超时时间
  static TIMEOUT = 60000;

  // static _fetchCookie(response) {
  //   let cookie = '';
  //   if ('Set-Cookie' in response.header) {
  //     cookie = response.header['Set-Cookie'];
  //   } else if ('set-cookie' in response.header) {
  //     cookie = response.header['set-cookie'];
  //   }
  //   return cookie;
  // }

  // static _sliceHeader(cookie, key) {
  //   if (cookie && (cookie.indexOf(key) > 0)) {
  //     const ksessionIndex = cookie.indexOf(key);
  //     const constKSessionId = cookie.slice(ksessionIndex, ksessionIndex + cookie.slice(ksessionIndex).indexOf(';'));
  //     return constKSessionId;
  //   }
  // }
  // // 取出 Cookie 中 kSeesionId 并保存
  // static _saveKSessionId(response) {
  //   const cookie = this._fetchCookie(response);
  //   const tmpKSessionId = this._sliceHeader(cookie, 'KSESSIONID');
  //   if (tmpKSessionId) {
  //     getApp().sessionData.minaCookie.kSessionId = tmpKSessionId;
  //   }
  //   const qhdi = this._sliceHeader(cookie, 'qhdi');
  //   if (qhdi) {
  //     getApp().sessionData.minaCookie.qhdi = qhdi;
  //   }
  //   wx.setStorage({
  //     key: 'minaCookie',
  //     data: getApp().sessionData.minaCookie,
  //   });
  // }

  static _request(method, path, data, header) {
    const server = getApp().settings.SERVER_ADDRESS;
    //const userAgent = getApp().settings.MP_USER_AGENT;
    /* eslint-disable prefer-destructuring */
    // let minaCookieString = '';
    // if (getApp().sessionData.minaCookie.kSessionId) {
    //   minaCookieString += `${getApp().sessionData.minaCookie.kSessionId};`;
    // }
    // if (getApp().sessionData.minaCookie.qhdi) {
    //   minaCookieString += getApp().sessionData.minaCookie.qhdi;
    // }
    return new Promise((resolve, reject) => {
      wx.request({
        url: server + path,
        method: method,
        data: data,
        header: {
          'content-type': 'application/json;charset=utf-8',
          // APIVERS: 'com.qunhe.instdeco.service.saas.brandcenter-fangzhang2',
          // Cookie: minaCookieString,
          // 'MP-User-Agent': userAgent,
          // ...header,
        },
        success: (response) => {
          console.log(`${path} >> `);
          console.log(response);
          if (response.statusCode === 200) {
            // 如果是登录接口，则存下cookie，这边比较恶心，因为小程序无cookie管理机制，后续有时间可以实现一套小程序的cookie管理机制
            // if (path.indexOf('regorlogin/phone') > 0) {
            //   getApp().saveCookie(this._fetchCookie(response));
            // }
            // this._saveKSessionId(response);
            const { data: result } = response;
            resolve(result);
            // if (result.hasOwnProperty('c')) {
            //   if (result.c === '0') {
            //     if ('d' in result) {
            //       resolve(result.d);
            //     } else {
            //       resolve({});
            //     }
            //   } else {
            //     reject(result.c);
            //   }
            // } else {
            //   resolve(result);
            // }
          } //else if (response.statusCode === 401) {
          //   // 登录过期，清除本地登录信息
          //   console.log('401 logout');
          //   getApp().clearLoginStates();
          //   getApp().event.emit(getApp().event.LOGOUT);
          //   reject(response.statusCode);
          // } else {
          //   reject(response.statusCode);
          // }
        },
        fail: () => {
          reject(new Error('请求失败'));
        },
      });
    });
  }

  static get(path, data = {}, header = {}) {
    return this._request('GET', path, data, header);
  }

  static post(path, data = {}, header = {}) {
    return this._request('POST', path, data, header);
  }

  static delete(pathurl, data = {}, header = {}) {
    return this._request('DELETE', path, data, header);
  }
}
