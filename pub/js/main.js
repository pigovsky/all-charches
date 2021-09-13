MENU = {
    "Розклад Богослужінь": "https://docs.google.com/document/d/e/2PACX-1vTbYtR9xdjoIuCm3MQLJBGcRDxZUHOgr25Udw4va4Kq7e_7V4mJY6w5qq98Ejll1QCtkZZFZY9uH4zF/pub?embedded=true",
    "Служителі": "https://docs.google.com/document/d/e/2PACX-1vR3jsdnd_Gf-TG97vQ5hYeJ4ebnR0pZHBjXFQhyCSxPUiqOPZJxazgsDDzYtrl4ubj8YaKhibev-5Wx/pub?embedded=true"
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
