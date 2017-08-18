export default class fetchApi {
  static get(url,option={method:'GET'}) {
    return fetch(url,option)
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (response.status >= 200 && response.status < 300) {
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json();
          }
          return response.text();
        }
        if (response.status === 400) {
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json().then(r => Promise.reject(r));
          }
          return response.text().then(r => Promise.reject(r));
        }
        if (response.status === 404) {
          return Promise.reject({ msg: '请求未找到' });
        }
        return Promise.reject(response);
      });
  }
}