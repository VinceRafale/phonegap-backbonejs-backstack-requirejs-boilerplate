define(['jquery', 'underscore', 'Backbone', 'views/map/MapView', 'text!views/home/HomeView.tpl'],
    function ($, _, Backbone, MapView, HomeViewTemplate) {
        var HomeView = Backbone.View.extend({

            initialize: function() {
                //cordova android backbutton
                document.addEventListener('backbutton', this.onBackKey, false);
            },

            events: {
                'click #btnNextView':'btnNextView_clickHandler'
            },

            onBackKey: function() {
                alert('BACK');
            },

            render : function() {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },

            btnNextView_clickHandler : function (e) {
                e.preventDefault();
                App.StackNavigator.pushView(MapView);
            }

        });
        return HomeView;
    });