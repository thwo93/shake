// Main entry point of the application
(function() {
    'use strict';
    
    /**
     * Prints greeting message to the console
     * @param {string} message - The message to be printed
     */
    function printMessage(message) {
        if (typeof message !== 'string') {
            console.error('Invalid message type. Expected string.');
            return;
        }
        console.log(message);
    }

    // Initialize application
    printMessage("Hello, World!");
})();