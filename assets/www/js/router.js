define([
    'marionette',
    'coords-view',
    'coords-model',
    'logger',
	'application'
],function(
    marionette,
    coordsView,
    coordsModel,
    logger,
    application
 ){

    'use strict';

    var appController = {
        'index': function(){
            logger.logInfo('we hit index');
            var view = new coordsView({model : new coordsModel()});
            application.main.show(view);
        }
    };

    var router = marionette.AppRouter.extend({

        initialize: function(){
            logger.logInfo('router initialised');
        },

        controller: appController,

        appRoutes: {
            '': 'index'
        }
    });

    return router;

});

