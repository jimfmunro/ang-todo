'use strict';

app.directive('clickToEdit', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the clicktoedit directive');
      }
    };
  });
