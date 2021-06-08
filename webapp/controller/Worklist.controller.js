sap.ui.define('ui5demo/controller/Worklist.controller', ["./BaseController", "sap/ui/model/json/JSONModel", "../model/formatter", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(B, J, f, F, a) {
    "use strict";
    return B.extend("ui5demo.controller.Worklist", {
        formatter: f,
        onInit: function() {
            var v, o, t = this.byId("table");
            o = t.getBusyIndicatorDelay();
            this._aTableSearchState = [];
            v = new J({
                worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
                shareOnJamTitle: this.getResourceBundle().getText("worklistTitle"),
                shareSendEmailSubject: this.getResourceBundle().getText("shareSendEmailWorklistSubject"),
                shareSendEmailMessage: this.getResourceBundle().getText("shareSendEmailWorklistMessage", [location.href]),
                tableNoDataText: this.getResourceBundle().getText("tableNoDataText"),
                tableBusyDelay: 0
            });
            this.setModel(v, "worklistView");
            t.attachEventOnce("updateFinished", function() {
                v.setProperty("/tableBusyDelay", o);
            });
        },
        onUpdateFinished: function(e) {
            var t, T = e.getSource(), i = e.getParameter("total");
            if (i && T.getBinding("items").isLengthFinal()) {
                t = this.getResourceBundle().getText("worklistTableTitleCount", [i]);
            } else {
                t = this.getResourceBundle().getText("worklistTableTitle");
            }
            this.getModel("worklistView").setProperty("/worklistTableTitle", t);
        },
        onPress: function(e) {
            this._showObject(e.getSource());
        },
        onNavBack: function() {
            history.go(-1);
        },
        onSearch: function(e) {
            if (e.getParameters().refreshButtonPressed) {
                this.onRefresh();
            } else {
                var t = [];
                var q = e.getParameter("query");
                if (q && q.length > 0) {
                    t = [new F("Name",a.Contains,q)];
                }
                this._applySearch(t);
            }
        },
        onRefresh: function() {
            var t = this.byId("table");
            t.getBinding("items").refresh();
        },
        _showObject: function(i) {
            this.getRouter().navTo("object", {
                objectId: i.getBindingContext().getProperty("ObjectID")
            });
        },
        _applySearch: function(t) {
            var T = this.byId("table")
              , v = this.getModel("worklistView");
            T.getBinding("items").filter(t, "Application");
            if (t.length !== 0) {
                v.setProperty("/tableNoDataText", this.getResourceBundle().getText("worklistNoDataWithSearchText"));
            }
        }
    });
});