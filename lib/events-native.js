/**
 * @fileoverview DOM abstraction to use native browser functionality to add and remove event listeners
 * in T3
 * @author jdivock
 */


Box.Events = (function(){
    'use strict';

    return {

		/**
		 * Adds event listener to element using native event listener
		 * @param {HTMLElement} element Target to attach listener to
		 * @param {string} type Name of the action to listen for
		 * @param {function} listener Function to be executed on action
		 *
		 * @returns {void}
		 */
        on: function(element, type, listener) {
            element.addEventListener(type, listener, false);
        },

		/**
		 * Removes event listener to element using native event listener functions
		 * @param {HTMLElement} element Target to remove listener from
		 * @param {string} type Name of the action remove listener from
		 * @param {function} listener Function to be removed from action
		 *
		 * @returns {void}
		 */
        off: function(element, type, listener) {
            element.removeEventListener(type, listener, false);
        }
    };
}());
