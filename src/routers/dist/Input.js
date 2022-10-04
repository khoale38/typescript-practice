"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_1 = require("../components/Card");
require("../styles/Input.scss");
var Home = function () {
    return (react_1["default"].createElement("div", { className: "background" },
        react_1["default"].createElement("h1", { className: "heading  pt-5 pb-3" }, "Message Record"),
        react_1["default"].createElement(Card_1["default"], null)));
};
exports["default"] = Home;
