angular.module('tapstatApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'angularUtils.directives.dirPagination'
]);

onReady = function() {
  angular.bootstrap(document, ['tapstatApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}