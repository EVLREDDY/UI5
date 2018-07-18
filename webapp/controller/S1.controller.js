sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Hybrid.Test.controller.S1", {
		onCamera:function(e){
			//navigator.camera.getPicture(this.success(),this.error());
			navigator.device.capture.captureImage(function(data,responce){
				debugger;
				
			},function(e){
				debugger;
			});
		}
	});
});