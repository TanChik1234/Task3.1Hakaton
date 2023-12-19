var buttonPlusElement = document.getElementById("button-plus");
var buttonMinusElement = document.getElementById("button-minus");
var Buttons;
(function (Buttons) {
    Buttons["Plus"] = "plus";
    Buttons["Minus"] = "minus";
})(Buttons || (Buttons = {}));
var port = 3005;
if (buttonPlusElement) {
    buttonPlusElement.addEventListener("click", function () {
        fetch("http://localhost:".concat(port, "/").concat(Buttons.Plus), {
            method: "GET"
        }).then(function (res) { return res.json(); })
            .then(function (response) {
            if (response.error) {
                alert("Помилка");
            }
            else {
                alert("\u041F\u043B\u044E\u0441: ".concat(response.plus, "\n\u041C\u0456\u043D\u0443\u0441: ").concat(response.minus));
            }
        })
            .catch(function (error) {
            console.error("Помилка під час отримання даних:", error);
        });
    });
}
if (buttonMinusElement) {
    buttonMinusElement.addEventListener("click", function () {
        fetch("http://localhost:".concat(port, "/").concat(Buttons.Minus), {
            method: "GET"
        }).then(function (res) { return res.json(); })
            .then(function (response) {
            if (response.error) {
                alert("Помилка");
            }
            else {
                alert("\u041F\u043B\u044E\u0441: ".concat(response.plus, "\n\u041C\u0456\u043D\u0443\u0441: ").concat(response.minus));
            }
        })
            .catch(function (error) {
            console.error("Помилка під час отримання даних:", error);
        });
    });
}
