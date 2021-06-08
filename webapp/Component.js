sap.ui.define("ui5demo/Component",[
   "sap/ui/core/UIComponent","sap/ui/Device","./model/models"
], function (UIComponent, D, m, E) {
    "use strict";
    return UIComponent.extend("ui5demo.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            this.setModel(m.createDeviceModel(), "device");
            this.getRouter().initialize();
        },
        destroy: function() {
            this._oErrorHandler.destroy();
            UIComponent.prototype.destroy.apply(this, arguments);
        },
        getContentDensityClass: function() {
            if (this._sContentDensityClass === undefined) {
                if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
                    this._sContentDensityClass = "";
                } else if (!D.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    });
});