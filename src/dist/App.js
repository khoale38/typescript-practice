"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("./App.scss");
var react_router_dom_1 = require("react-router-dom");
var Input_1 = require("./routers/Input");
var Gif_1 = require("./routers/Gif");
var Home_1 = require("./routers/Home");
var Record_1 = require("./routers/Record");
var react_1 = require("react");
var react_alert_1 = require("react-alert");
var App = function () {
    var AlertTemplate = function (_a) {
        var options = _a.options, message = _a.message;
        return (react_1["default"].createElement("div", { className: "alert m-3 " + (options.type === "error"
                ? "alert-danger"
                : options.type === "error"
                    ? "alert-primary"
                    : "alert-secondary") }, message));
    };
    var options = {
        // you can also just use 'bottom center'
        position: react_alert_1.positions.TOP_CENTER,
        timeout: 2000,
        offset: "150px",
        // you can also just use 'scale'
        transition: react_alert_1.transitions.SCALE
    };
    return (react_1["default"].createElement(react_alert_1.Provider, __assign({ template: AlertTemplate }, options),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/input", element: react_1["default"].createElement(Input_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/gif", element: react_1["default"].createElement(Gif_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/record", element: react_1["default"].createElement(Record_1["default"], null) }))));
};
exports["default"] = App;
