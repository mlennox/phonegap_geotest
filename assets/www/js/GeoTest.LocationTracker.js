define(['application','logger','vent'],function(app,logger, vent){
    'use strict';

    logger.logInfo('Location tracker loaded');


    var tracker = (function(){

        var watchId = -1;

        var _options = {
            frequency: 3000,
            timeout: 10000,
            enableHighAccuracy: true,
            changeEventName: 'locationChanged'
        };

        var _onSuccess = function(position){
            logger.logInfo('location changed');
            vent.trigger(_options.changeEventName, position);
        };

        // TODO : complete the error handling
        var _onError = function(errorThing) {
            // some logging would be nice too...
            //_stop(); // do we want to stop here?
            logger.logInfo('gps lookup failed');
        };

        return {

            changeEventName: function(){
                return _options.changeEventName;
            },

            start: function() {
                watchId = navigator.geolocation.watchPosition(_onSuccess, _onError, {
                    frequency: _options.frequency,
                    enableHighAccuracy: _options.enableHighAccuracy
                });

                // we take an immediate sample location
                navigator.geolocation.getCurrentPosition(_onSuccess, _onError, {
                    enableHighAccuracy: _options.enableHighAccuracy,
                    timeout: _options.timeout
                });
            },

            stop: function(){
                navigator.geolocation.clearWatch(watchId);
                watchId = -1;
            },

            updateOptions: function(options){
                _options.enableHighAccuracy = options.enableHighAccuracy || _options.enableHighAccuracy;
                _options.frequency = options.frequency || _options.frequency;
                _options.timeout = options.timeout || _options.timeout;
                _options.changeEventName = options.changeEventName || _options.changeEventName;

                // if it was running, restart with the new options
                if (watchId !== -1 && _options.restart !== false){
                    stop();
                    start();
                }
            }

        };

    })();

    return tracker;
});