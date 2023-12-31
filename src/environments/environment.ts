// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  XRapidApiHostHeaderName: 'X-RapidAPI-Host',
  XRapidApiHostHeaderValue: 'weatherapi-com.p.rapidapi.com',
  XRapidApiKeyHeaderName: 'X-RapidAPI-Key',
  XRapidApiKeyHeaderValue: '7803e2880cmsh235f66101e67e18p17a844jsnbba0e1bcb415'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
