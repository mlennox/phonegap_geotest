define([
    'cordova',
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'logger'
], function (cordova, $, _, backbone, marionette, logger) {

    'use strict';

	logger.logInfo('main loaded');

    var application = marionette.Application.extend({


        startUp: function() {
	        var self = this;
	        return function() {
		        logger.logInfo('about to call start on the app');
		        self.start();
	        };
        },

        kickIt: function(){

            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
                logger.logInfo('we are on a device');
                document.addEventListener("deviceready", this.startUp(), false);
            } else {
                logger.logInfo('we are in a browser');
                this.startUp()();
            }
        }

    });

	var app = new application();

	app.addRegions({
		header: 'header',
		main: 'section.main',
		footer: 'footer'
	});

    return app;

});