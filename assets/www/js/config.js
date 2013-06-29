requirejs.config({
    baseUrl: 'js',
    paths: {
        app: './app',
        libs: './libs',
        helpers: './helpers',
        cordova: 'libs/cordova-2.4.0',
        backbone: 'libs/backbone',
	    wreqr: 'libs/backbone.wreqr',
        marionette: 'libs/backbone.marionette',
        text: 'libs/text',
        underscore: 'libs/underscore-min',
        localStorage: 'libs/backbone.localStorage',
        jquery: 'libs/jquery-1.9.1.min',
        logger: 'helpers/logger-helper',
        views: 'GeoTest.Views',
        models: 'GeoTest.Models',
        layout: 'GeoTest.Layout',
        locationTracker: 'GeoTest.LocationTracker',
        router: 'router',
	    vent: 'helpers/vent',
	    application: 'application'
    },
    shim: {
	    jquery: {
		    exports: 'jQuery'
	    },
	    underscore: {
		    exports: '_'
	    },
	    backbone: {
		    deps: ['jquery', 'underscore'],
		    exports: 'Backbone'
	    },
	    'wreqr': {
		    deps: ['backbone','marionette', 'underscore'],
		    exports: 'Backbone.Wreqr'
	    },
	    marionette: {
		    deps: ['jquery', 'underscore', 'backbone'],
		    exports: 'Marionette'
	    },
	    bootstrap: ['jquery'],
	    application: {
		    deps: ['backbone','cordova','marionette', 'underscore']
	    }
    }
});

define(['application', 'backbone', 'logger', 'router'],
function(app, backbone, logger, router){

	app.listenTo(app, 'initialize:after', function () {
		logger.logInfo('the app has initialized');
		var appRouter = new router();
		backbone.history.start();
	});

    app.kickIt();
});