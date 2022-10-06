"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/Record.scss");
var react_router_dom_1 = require("react-router-dom");
var Record = function () {
    var _a;
    var form;
    var params = react_router_dom_1.useLocation();
    form = params.state;
    return (react_1["default"].createElement("div", { className: "Record-bg d-flex" },
        react_1["default"].createElement("div", { className: "card record-card custom-card min-card-size mx-auto" },
            react_1["default"].createElement("div", { className: "mb-3" },
                react_1["default"].createElement("span", { className: "record-text message-text" },
                    "On ",
                    react_1["default"].createElement("b", { className: "yellow-voyage" }, (_a = form.date) === null || _a === void 0 ? void 0 :
                        _a.slice(0, 10),
                        " "),
                    ",",
                    " ",
                    react_1["default"].createElement("b", { className: "yellow-voyage" }, form.name),
                    " send this message :",
                    react_1["default"].createElement("div", { className: "mt-3  yellow-voyage" },
                        "\"",
                        react_1["default"].createElement("b", { className: "message-text" }, form.message),
                        "\""))),
            form.image != "" ? (react_1["default"].createElement("div", { className: "record-text " },
                "And you choose this image for this occasion :",
                react_1["default"].createElement("img", { className: "mt-3 ctm-img", src: form.image }))) : (react_1["default"].createElement("div", null)))));
};
exports["default"] = Record;
