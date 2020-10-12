/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"areyouready/to/play/withGopesh/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
