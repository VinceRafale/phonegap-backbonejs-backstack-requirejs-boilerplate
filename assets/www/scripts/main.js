require.config({
    paths:{
        // RequireJS plugin
        text:'libs/require/text',
        // RequireJS plugin
        domReady:'libs/require/domReady',
        // underscore library
        underscore:'libs/underscore/underscore',
        // Backbone.js library
        Backbone:'libs/backbone/backbone',
        // jQuery
        jquery:'libs/jquery/jquery-1.9.1',

        //backtack view pusher
        backstack:'libs/backstack/backstack-min',
    },
    shim:{
        Backbone : {
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore : {
            exports:'_'
        },
        backstack : {
            deps:['Backbone', 'underscore', 'jquery'],
        }
    }
});

require(['domReady', 'views/home/HomeView', 'backstack', 'db', 'helpers'],
    function (domReady, HomeView, Backstack, db, Helpers) {

        // domReady is RequireJS plugin that triggers when DOM is ready
        domReady(function () {
            
            //ondevice ready is cordave(phonegap) function
            function onDeviceReady(desktop) {
                // Hiding splash screen when app is loaded
                if (desktop !== true) {
                    cordova.exec(null, null, 'SplashScreen', 'hide', []);
                }

                //setup some globals so we can use it throughout the views in the app
                window.App = {
                    dbInstantion: window.openDatabase("database", "1.0", "database", 2000000),
                    dbClass: db,
                    Vent: _.extend({}, Backbone.Events),
                    Helpers: Helpers,
                    ViewInstances: {},
                    StackNavigator : new Backstack.StackNavigator({el: '#container'})
                };

                //set default transition for pushing view
                this.fade = new Backstack.FadeEffect();
                App.StackNavigator.defaultPushTransition = this.fade;


                //init database
                db.initialize();

                //render view
                App.StackNavigator.pushView(new HomeView());
            }

            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
                // This is running on a device so waiting for deviceready event
                document.addEventListener('deviceready', onDeviceReady, false);
            } else {
                // On desktop don't have to wait for anything
                onDeviceReady(true);
            }
        });

    });