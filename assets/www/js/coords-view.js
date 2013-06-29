define([
    'marionette','logger'
],function(
    marionette, logger){
    'use strict';

    logger.logInfo('coords view loaded');

    var coordsView = marionette.ItemView.extend({

        //el: 'section.main',

        // TODO : pull this in usng text!...
        template: '#template-geotestCoordsView',

        initialize: function () {
	        logger.logInfo('view is initialising');

            this.listenTo(this.model, 'change', this.render, this);
        }

    });

    return coordsView;
});