/**
 * @fileoverview
 * @author Box
 */

Box.Events = (function(){
    'use strict';

    return {
        on: function(element, type, listener) {
            element.addEventListener(type, listener);
        },

        off: function(element, type, listener) {
            element.removeEventListener(type, listener);
        }
    };
}());
