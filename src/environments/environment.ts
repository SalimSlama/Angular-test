// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {
  production: false,

firebase : {
    apiKey: "AIzaSyA-EzvCl9WV45LZ-JdfRqZ8UebSEfOpexA",
    authDomain: "testangular-d39cd.firebaseapp.com",
    databaseURL: "https://testangular-d39cd-default-rtdb.firebaseio.com",
    projectId: "testangular-d39cd",
    storageBucket: "testangular-d39cd.appspot.com",
    messagingSenderId: "425581845867",
    appId: "1:425581845867:web:88da777099dbc1fdf5c02e"
  },
// Initialize Firebase
  //app : initializeApp(firebase)
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
