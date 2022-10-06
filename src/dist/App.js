"use strict";
exports.__esModule = true;
require("./App.scss");
var react_router_dom_1 = require("react-router-dom");
var Input_1 = require("./routers/Input");
var Gif_1 = require("./routers/Gif");
var Home_1 = require("./routers/Home");
var Record_1 = require("./routers/Record");
var react_1 = require("react");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/input", element: react_1["default"].createElement(Input_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/gif", element: react_1["default"].createElement(Gif_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/record", element: react_1["default"].createElement(Record_1["default"], null) })));
};
exports["default"] = App;
