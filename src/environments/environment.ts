// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SERVER_URL: 'http://172.16.10.52:8081'
  // SERVER_URL: 'http://192.168.10.107:8081'
};
// 本地存储前缀
export const STORAGE_PREFIX = 'ct-';

// 本地存储密钥
export const STORAGE_SECRET = '1234qwer~';
// 身份验证token
export const AUTH_TOKEN = 'm_session_id';
// token过期时间
export const AUTH_TOKEN_EXPIRES = 12 * 60 * 60 * 1000;
// 用户信息key
export const USERINFO = 'm_blog_info';
// 访问子系统是需要的验证信息
export const URL_AUTH_TOKEN = 'token';
// 不验证登录信息的服务地址
export const IGNORE_APIS = [
  '/user/login'
];
// 不验证登录信息的路由
export const IGNORE_ROUTES = [
  '/login'
];

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
