/**
 * @fileoverview DOM abstraction to use jquery to add and remove event listeners
 * in T3
 * @author jdivock
 */

Box.JQueryEvents = (function(){
    'use strict';

    return {

		type: 'jq',

		/**
		 * Adds event listener to element via jquery
		 * @param {HTMLElement} element Target to attach listener to
		 * @param {string} type Name of the action to listen for
		 * @param {function} listener Function to be executed on action
		 *
		 * @returns {void}
		 */
        on: function(element, type, listener) {
            $(element).on(type, listener);
        },

		/**
		 * Removes event listener to element via jquery
		 * @param {HTMLElement} element Target to remove listener from
		 * @param {string} type Name of the action remove listener from
		 * @param {function} listener Function to be removed from action
		 *
		 * @returns {void}
		 */
        off: function(element, type, listener) {
            $(element).off(type, listener);
        }
    };
}());

Box.Events = Box.JQueryEvents;
