MENU = {
    "Ініціативи": "https://docs.google.com/document/d/e/2PACX-1vTeYGHck4hDh8CwTlUvMxM3QGNoDDryzkbJ0GFRhEUGsV-qFI2BxPqHbGtmB20laMClyzqfohLPpgwN/pub?embedded=true",
    "Громада": "pages/community.html"
}

function init() {
    new Vue({
        "el": '#app',
        "data": {
            "menu": MENU,
            "mainContent": ""
        },
        "methods": {
            "select": function(link) {
                console.log(link);
                this.mainContent=link;
            }
        }
    });
}
