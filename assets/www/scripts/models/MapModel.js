define(['jquery', 'underscore', 'Backbone'],
	function($, _, Backbone) {
		var MapModel = Backbone.Model.extend({
			defaults: {
				id: 1
			},
		});

		return MapModel
	});
