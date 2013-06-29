define([
	'vent',
	'backbone',
	 'locationTracker', 'logger'
],function(
	vent,
    backbone,
    locationTracker, logger
 ){
    'use strict';

    logger.logInfo('coords model loaded');

    var coords = backbone.Model.extend({
        defaults: {
            'latitude': '--',
            'longitude': '--',
            'accuracy': '--',
            'altitude': '--',
            'altitudeAccuracy': '--',
            'heading': '--',
            'headingAccuracy': '--',
            'speed': '--',
            'timestamp': '--'
        },

        initialize: function(){
            logger.logInfo('model is initialising');

	        _.bindAll(this);

            this.listenTo(vent, locationTracker.changeEventName(), this.updatePosition);

            // just because we have the reference here, no need for this in other
            locationTracker.start();
        },

        updatePosition: function(position){
            logger.logInfo('model is updating postion');
//	        for (var thing in position){
//		        logger.logInfo(thing + ' : ' + position[thing]);
//	        }
//	        for (var thing in position.coords){
//		        logger.logInfo('coords : ' + thing + ' : ' + position.coords[thing]);
//	        }

            if (typeof(position) !== 'undefined'){
                this.set('latitude', position.coords.latitude);
                this.set('longitude', position.coords.longitude);
                this.set('accuracy', position.coords.accuracy);
                this.set('altitude', position.coords.altitude);
                this.set('altitudeAccuracy', position.coords.altitudeAccuracy);
                this.set('heading', position.coords.heading);
                this.set('headingAccuracy', position.coords.headingAccuracy);
                this.set('speed', position.coords.speed);
                this.set('timestamp', position.timestamp);
            }
        }
    });

    return coords;

});