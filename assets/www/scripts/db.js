define([],
	function() {
		/**************
		** THIS OBJECT CONTAINS ALL STORAGES WHICH ARE DONE IN THE LOCAL SQLITE DATABASE
		***************/
		var db = {
			/***
			* GENERAL DB FUNCTIONS
			***/

			initialize: function() {
				var self = this;
				// make use of the global databaseinstation
				if(window.localStorage.getItem('dbExists') == null) {
					App.dbInstantion.transaction(this.populateDB, this.errorCB, function(result){ window.localStorage.setItem('dbExists', 1) });
				} else {
					//database exists
				}

			},

			populateDB : function(tx) {
				//example table users
				tx.executeSql(
			     	'CREATE TABLE IF NOT EXISTS users(user_id INTEGER NOT NULL PRIMARY KEY unique, username NOT NULL, password NOT NULL, active, updated_at NOT NULL )'
			    );
			},

			errorCB: function(error) {
				console.log(error);
			},


		};
		return db;
	});