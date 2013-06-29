define([], function () {

    'use strict';

    window.log = window.log || { history : [] };

    var loggerHelper = {

        log: window.log,

        /**
         * this makes it easier to filter the android logcat messages
         */
        _prefix: "geotestlog",

        logInfo: function() {
            this.log.history.push(arguments);
            if(window.console){
                console.log( this._prefix + ' INFO ' + Array.prototype.slice.call(arguments) );
            }
        }

    };

    return loggerHelper;

});