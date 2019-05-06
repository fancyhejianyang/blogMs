// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SERVER_URL: 'http://192.168.10.107:8081'
};
// 本地存储前缀
export const STORAGE_PREFIX = 'ct-';

// 本地存储密钥
export const STORAGE_SECRET = '1234qwer~';
export const AUTH_TOKEN = 'userCode';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
