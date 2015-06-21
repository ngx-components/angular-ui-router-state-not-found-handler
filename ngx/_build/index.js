import angular from 'angular';
import config from './config';

import registerStateNotFoundHandler from './register-state-not-found-handler';

export default function(ngModule, options){
  angular.merge(config, options);

  registerStateNotFoundHandler(ngModule, options);
};
