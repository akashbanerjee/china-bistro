(function() {
  "use strict";

  angular.module('common', [])
  .constant('ApiPath', 'https://akash-banerjee-apps.herokuapp.com')
  .config(config);

  config.$inject = ['$httpProvider'];
  function config($httpProvider)  {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }//interceptor- holds an array when http service goes out to do job, it checks if one of its interceptors are seeing the response and requests




})();