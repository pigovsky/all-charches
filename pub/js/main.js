MENU = {
    "Розклад Богослужінь": "https://docs.google.com/document/d/e/2PACX-1vTbYtR9xdjoIuCm3MQLJBGcRDxZUHOgr25Udw4va4Kq7e_7V4mJY6w5qq98Ejll1QCtkZZFZY9uH4zF/pub?embedded=true",
    "Служителі": "https://docs.google.com/document/d/e/2PACX-1vR3jsdnd_Gf-TG97vQ5hYeJ4ebnR0pZHBjXFQhyCSxPUiqOPZJxazgsDDzYtrl4ubj8YaKhibev-5Wx/pub?embedded=true",
    "Корисне": "https://docs.google.com/document/d/e/2PACX-1vTtL9F7VIntnX4lcSUjliygWquhYGJx9MCJYuF2hBGaYrE1gpY9sF3wIY3fZBG7JFPdtcMnSBR9kfdr/pub?embedded=true",
    "Де?": "https://psaltyr-u-wynogradnyku.web.app/map.html"
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
