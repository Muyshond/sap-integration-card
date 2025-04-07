sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/core/library" // Add this for core functionality
], function (UIComponent, coreLibrary) {
	"use strict";

	var Component = UIComponent.extend("my.component.sample.cardContentControls.Component", {
		metadata: {
			manifest: "json"
		},

		init: function() {
			// Call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// Include your CSS
			this.includeStylesheet();
		},
		
		includeStylesheet: function() {
			// Create link element for CSS
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = sap.ui.require.toUrl("Card/css/styles.css");
			document.head.appendChild(link);
		}
	});

	return Component;
});