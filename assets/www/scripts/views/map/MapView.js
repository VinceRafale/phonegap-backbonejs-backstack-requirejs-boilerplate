define(['underscore', 'Backbone', 'text!views/map/MapView.tpl', 'models/MapModel'],
    function (_, Backbone, MapViewTemplate, MapModel) {

        var MapView = Backbone.View.extend({
            initialize: function() {
                console.log(new MapModel);
            },

            events:{
                'click #btnBack':'btnBack_clickHandler'
            },

            render:function () {
                this.$el.html(_.template(MapViewTemplate));
                return this;
            },

            btnBack_clickHandler:function (event) {
                App.StackNavigator.popView();
            }

        });

        return MapView;
    });