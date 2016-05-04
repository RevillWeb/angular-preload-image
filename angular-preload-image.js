/**
 * License: MIT
 */
(function(angular) {
    'use strict';
    angular.module('angular-preload-image', []);
    angular.module('angular-preload-image').factory('preLoader', function () {
        return function (url, successCallback, errorCallback) {
            //Thank you Adriaan for this little snippet: http://www.bennadel.com/members/11887-adriaan.htm
            angular.element(new Image()).bind('load', function () {
                successCallback();
            }).bind('error', function () {
                errorCallback();
            }).attr('src', url);
        }
    });
    angular.module('angular-preload-image').directive('preloadImage', ['preLoader', function (preLoader) {
        return {
            restrict: 'A',
            terminal: true,
            priority: 100,
            link: function (scope, element, attrs) {
                scope.default = attrs.defaultImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=";
                attrs.$observe('ngSrc', function () {
                    var url = attrs.ngSrc;
                    attrs.$set('src', scope.default);
                    preLoader(url, function () {
                        attrs.$set('src', url);
                    }, function () {
                        if (attrs.fallbackImage != undefined) {
                            attrs.$set('src', attrs.fallbackImage);
                        }
                    });
                })
    
            }
        };
    }]);
    angular.module('angular-preload-image').directive('preloadBgImage', ['preLoader', function (preLoader) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (attrs.preloadBgImage != undefined) {
                    //Define default image
                    scope.default = attrs.defaultImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=";
    
                    attrs.$observe('preloadBgImage', function () {
                        element.css({
                            'background-image': 'url("' + scope.default + '")'
                        });
                        preLoader(attrs.preloadBgImage, function () {
                            element.css({
                                'background-image': 'url("' + attrs.preloadBgImage + '")'
                            });
                        }, function () {
                            if (attrs.fallbackImage != undefined) {
                                element.css({
                                    'background-image': 'url("' + attrs.fallbackImage + '")'
                                });
                            }
                        });
                    });
                }
            }
        };
    }]);
})(angular);
