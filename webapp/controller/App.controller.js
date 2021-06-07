sap.ui.predefine('ui5demo/controller/App.controller', ["./BaseController", "sap/ui/model/json/JSONModel"], function(B, J) {
    "use strict";
    return B.extend("ui5demo.controller.App", {
        onInit: function() {
            var v, s, o = this.getView().getBusyIndicatorDelay();
            v = new J({
                busy: true,
                delay: 0
            });
            this.setModel(v, "appView");
            s = function() {
                v.setProperty("/busy", false);
                v.setProperty("/delay", o);
            }
            ;
            this.getOwnerComponent().getModel().metadataLoaded().then(s);
            this.getOwnerComponent().getModel().attachMetadataFailed(s);
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });
});