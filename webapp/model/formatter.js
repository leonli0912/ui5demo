sap.ui.define('ui5demo/model/formatter', [], function() {
    "use strict";
    return {
        numberUnit: function(v) {
            if (!v) {
                return "";
            }
            return parseFloat(v).toFixed(2);
        }
    };
});