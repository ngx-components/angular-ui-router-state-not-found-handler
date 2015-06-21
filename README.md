![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

## Angular ui-router state not found handler

[AngularJS Express](https://github.com/angular-express/angular-express) component to add a custom ui-router state not found handler.

A state not found event is triggered when a non-existent state is requested.

## Installation

To install the component:

```bash
$ ngx install angular-ui-router-state-not-found-handler
```

No clue what the `ngx` command line tool is? Learn more about [AngularJS Express](https://github.com/angular-express/angular-express).

## How to use

After installing the component:

- edit `_build/register-state-not-found-handler.js`
- add your custom logic

and import the component in your Angular application:

```javascript
// Angular main module
var ngModule = angular.module('app', []);

// Import component
import c from 'components/angular-ui-router-state-not-found-handler/_build/index';

// Instantiate component
c(ngModule, { baseUrl: 'components/angular-ui-router-state-not-found-handler' });
```

## Component options

- `baseUrl`: Base URL that component can use to construct links

## License

[MIT](LICENSE)

## Change log

### v0.1.0

- Initial version
