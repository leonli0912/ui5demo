sap.ui.define('ui5demo/controller/BaseController', ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/m/library"], function(C, U, m) {
    "use strict";
    var a = m.URLHelper;
    return C.extend("ui5demo.controller.BaseController", {
        getRouter: function() {
            return U.getRouterFor(this);
        },
        getModel: function(n) {
            return this.getView().getModel(n);
        },
        setModel: function(M, n) {
            return this.getView().setModel(M, n);
        },
        getResourceBundle: function() {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        onShareEmailPress: function() {
            var v = (this.getModel("objectView") || this.getModel("worklistView"));
            a.triggerEmail(null, v.getProperty("/shareSendEmailSubject"), v.getProperty("/shareSendEmailMessage"));
        }
    });
});