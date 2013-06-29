'use strict';

// TODO : rewrite to use require.js
// TODO : load the templates using text.js

console.log('geotestlog - app loaded');

var GeoTest;

var startUp = function(){

    console.log('geotestlog - the device became ready');

    GeoTest = new Backbone.Marionette.Application();

    GeoTest.addRegions({
        header: 'header',
        main: 'section.main',
        footer: 'footer'
    });

//    GeoTest.addInitializer(function(options){
//        // whu?
//    });

    GeoTest.on('initialize:after', function () {
        console.log('geotestlog - the app is starting');
        Backbone.history.start();
    });

    console.log('geotestlog - about to call start on the app');
    GeoTest.start();
};


if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    console.log('geotestlog - we are on a device');
    document.addEventListener("deviceready", startUp, false);
} else {
    console.log('geotestlog - we are in a browser');
    startUp();
}
