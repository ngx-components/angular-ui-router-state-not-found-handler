export default function(ngModule, options){

  ngModule.run(registerStateNotFoundHandler);

  /**
   * Register error handler for ui-router state not found errors
   *
   * This catches situations where the toState is not defined
   */
  function registerStateNotFoundHandler($rootScope) {

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

      // ADD CUSTOM LOGIC HERE
      // event.preventDefault();
    });

  }

  // Inject dependencies;
  registerStateNotFoundHandler.$inject = ['$rootScope'];

};

