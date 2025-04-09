sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("my.component.sample.cardContentControls.Main", {
		onInit: function () {
			// var oModel = new JSONModel({
				
			// 	"numbers": [
			// 		1, 2, 3, 4, 5,6
			// 	]
			// });
			const oView =  this.getView();
			console.log("test")
			
			const apiUrl = `https://catfact.ninja/fact`;
//f
			fetch(apiUrl)
			.then(response => {
				if (!response.ok) throw new Error('Failed to fetch weather data');
				return response.json();
				
			})
			.then(data => {
				
				const oWeatherModel = new JSONModel(data);
      			oView.setModel(oWeatherModel, "cat");
				
			})
			.catch(error => {
				console.error('Error fetching weather:', error);
			});
		}
	});
});