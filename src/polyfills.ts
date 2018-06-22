/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/***
IE9, IE10 and IE11 requires all of the following polyfills.
**/

// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/*** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/*** Babel Polyfill **/
import '../node_modules/babel-polyfill/dist/polyfill.min.js';

/*** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';

/* Declare polyfills as global */
declare global {
  interface String {
    replaceMatches(json: JSON): string;
  }
}
/*
  This utility function matches json's attributes into a String
  using ES6 string templates sintax ${attr} and replace them using json's values.
  Notice that only strings are supported! It won't work with expressions or inner obejects.
  Example: 'Hello, my name is ${name}!'.replaceMatches({name: 'Jhon'})
  will return in 'Hello, my name is Jhon!'
 */
String.prototype.replaceMatches = function(json): any {
  if (!json) {
    // tslint:disable-next-line:no-invalid-this
    return this;
  }

  const regx = new RegExp(
    Object.keys(json)
      .map(key => {
        return `\\$\\{${key}\\}`; // places the key inside ${}
      })
      .join('|'),
    'ig'
  );

  // tslint:disable-next-line:no-invalid-this
  return this.replace(regx, match => {
    const key = match.match(/\{(.*)\}/)[1]; // gets the key inside ${}

    return json[key];
  });
};

/* Object assign polyfills for IE */
// tslint:disable-next-line:only-arrow-functions
Object.assign =
  Object.assign ||
  function(t): any {
    for (let s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (const p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }

    return t;
  };
