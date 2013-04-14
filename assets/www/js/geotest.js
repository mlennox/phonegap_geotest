/**
 * Created with IntelliJ IDEA.
 * User: mlennox
 * Date: 14/04/2013
 * Time: 17:08
 * To change this template use File | Settings | File Templates.
 */

// steps toward a fully working app:
// 1. load all js and display 'ready' message
// 2. loop to check location and update view to display the data
// 3. connect to google maps / open street maps
// 3.a figure out what the data looks like and how we might go about displaying it
// 4. load the region centered around the geo location and display it
// next steps??

'use strict';

var GeoTest = {};

(function(app){

    var onDeviceReady = function() {

        app = new Backbone.Marionette.Application();

        app.addRegions({
            header: 'header',
            main: 'section.main',
            footer: 'footer'
        });

        app.on('initialize:after', function () {
            Backbone.history.start();
        });

        alert('device ready');

        // can we start listening to some 'location updated' event here?
    };

    document.addEventListener('deviceready', this.onDeviceReady, false);

}(GeoTest));








