'use strict';

angular
    .module('userList')
    .animation('.person-in-detail', function () {
    return {
        addClass: hide,
        removeClass: show
    };

    function hide(element, className, done) {
        if(className !== 'ng-hide')
            return;

        jQuery(element)
            .slideUp(400, done)

        return function(wasCanceled) {
            if (wasCanceled) element.stop();
        };
    }

    function show(element, className, done) {
        if(className !== 'ng-hide')
            return;

        jQuery(element)
            .slideDown(400, done)

        return function(wasCanceled) {
            if (wasCanceled) element.stop();
        };
    }
    });