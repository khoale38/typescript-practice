"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/Home.scss");
var Main = function () {
    return (react_1["default"].createElement("div", { className: "Home-bg d-flex" },
        react_1["default"].createElement("div", { className: "card custom-card mx-auto" },
            react_1["default"].createElement("div", { className: "mb-3 " },
                react_1["default"].createElement("div", { className: "form-label  text-align" }, "Input Record Code"),
                react_1["default"].createElement("input", { type: "email", className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp" })),
            react_1["default"].createElement("button", { className: "btn btn-grad mb-3", type: "button" }, "Submit"),
            react_1["default"].createElement("a", { href: "/gif", className: "mx-auto text-color" }, "I am feeling lucky today - Get a random Gif "))));
};
exports["default"] = Main;
