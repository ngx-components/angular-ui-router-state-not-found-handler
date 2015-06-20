import angular from 'angular';
import config from './config';

export default function(ngModule, options){
  angular.merge(config, options);
  ngModule.run(registerErrorHandler);
};

/**
 * Register error handler for ui-router state not found errors
 *
 * This catches situations where the toState is not defined
 */
function registerErrorHandler($rootScope) {

  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

    // ADD CUSTOM LOGIC HERE
    // event.preventDefault();
  });

}

// Inject dependencies;
registerErrorHandler.$inject = ['$rootScope'];
