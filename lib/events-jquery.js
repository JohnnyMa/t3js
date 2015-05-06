/**
 * @fileoverview
 * @author Box
 */

Box.Events = (function(){
    'use strict';

    return {
        on: function(element, type, listener) {
            $(element).on(type, listener);
        },

        off: function(element, type, listener) {
            $(element).off(type, listener);
        }
    };
}());
