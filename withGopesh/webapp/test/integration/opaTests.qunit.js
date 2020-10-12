/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"areyouready/to/play/withGopesh/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});