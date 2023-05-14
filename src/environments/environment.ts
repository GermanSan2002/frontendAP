// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'portfolioap-ac61e',
    appId: '1:515363449359:web:a9655ad8772ec7ebf5917a',
    storageBucket: 'portfolioap-ac61e.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBl9AhwH-FzsaaKW7_Y-w3tr4SNJuq__7Q',
    authDomain: 'portfolioap-ac61e.firebaseapp.com',
    messagingSenderId: '515363449359',
  },
  /* Produccion */

  production: true,
  URL: 'https://backendap-ur2q.onrender.com/'

  /* Prueba */
  //production: false,
  //URL: 'http://localhost:8080/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.