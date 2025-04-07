sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("my.component.sample.cardContentControls.Main", {
		onInit: function () {
			var oModel = new JSONModel({
				
				"numbers": [
					1, 2, 3, 4, 5,6
				]
			});
			this.getView().setModel(oModel);
		}
	});
});