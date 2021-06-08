sap.ui.define([
	"sap/ui/core/ComponentContainer",
	"ui5demo/localService/mockserver",
	"sap/m/MessageBox"
], function (ComponentContainer,mockserver, MessageBox) {
	"use strict";

	var aMockservers = [];

	// initialize the mock server
	aMockservers.push(mockserver.init());

    // initialize the embedded component on the HTML page
	//	sap.ui.require(["sap/ui/core/ComponentSupport"]);
	new ComponentContainer({
		name: "ui5demo",
		settings : {
			id : "ui5demo"
		},
		async: true
	}).placeAt("content");

});