/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gi/git01app/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});