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
// 5. show a fuzzy compass - "you are pointing at {nearest landmark}" or a nautical compass "nor by norwest" etc.
// next steps??

'use strict';

var GeoTest = {};

(function(app){

    var watchId = null;

    var elLatitude = null;
    var elLongitude = null;

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

        elLatitude = document.querySelector('.latitude');
        elLongitude = document.querySelector('.longitude');

        elLatitude.innerHTML = 'loaded';

        if (elLatitude && elLongitude){
            elLongitude.innerHTML = 'locked in';


            var options = { frequency: 3000, enableHighAccuracy: true };
            watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);

            var currentOptions = { enableHighAccuracy: true, timeout: 10000 };
            navigator.geolocation.getCurrentPosition(onSuccess, onError, currentOptions);

            elLongitude.innerHTML = 'and events set';
        }
    };

    var onSuccess = function(position){
      // obviously we'll get marionette to do this, but for now...
        elLatitude.innerHTML = 'blah : ' + position.coords.latitude;
        elLongitude.innerHTML = 'gah: ' + position.coords.longitude;
    };

    var onError = function() {
        // some logging would be nice too...
        //navigator.geolocation.clearWatch(watchId);
        //alert('bah!');
        elLatitude.innerHTML = 'bah!!';
        console.writeln('gps lookup failed');
    };

    document.addEventListener('deviceready', onDeviceReady, false);

}(GeoTest));








