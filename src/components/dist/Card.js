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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("../styles/Home.scss");
var react_2 = require("react");
var Card = function () {
    var _a = react_2.useState([]), images = _a[0], setImages = _a[1];
    var _b = react_2.useState([]), imageURLS = _b[0], setImageURLs = _b[1];
    var _c = react_2.useState({
        name: "",
        date: "",
        message: "",
        image: ""
    }), form = _c[0], setForm = _c[1];
    react_2.useEffect(function () {
        if (images.length < 1)
            return;
        var newImageUrls = [];
        images.forEach(function (image) {
            return newImageUrls.push(URL.createObjectURL(image));
        });
        setImageURLs(newImageUrls);
    }, [images]);
    function onImageChange(e) {
        setImages(__spreadArrays(e.target.files));
    }
    var changeHandler = function (event) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[event.target.name] = [event.target.value], _a)));
    };
    var showState = function () {
        console.log(form);
    };
    return (react_1["default"].createElement("div", { className: " card bg-white px-5 py-5 mb-4 mx-4 pinktext" },
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold", htmlFor: "name" }, "T\u00EAn \u0111\u00EA"),
            react_1["default"].createElement("input", { type: "text", className: "form-control", id: "name", name: "name", placeholder: "Your Name", onChange: function (e) {
                    changeHandler(e);
                } })),
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold", htmlFor: "date" }, "Ng\u00E0y sinh \u0111\u00EA"),
            react_1["default"].createElement("input", { type: "date", className: "form-control", id: "date", name: "date", onChange: function (e) {
                    changeHandler(e);
                } })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold", htmlFor: "message" }, "L\u1EDDi nh\u1EAFn \u0111\u00EA"),
            react_1["default"].createElement("textarea", { className: "form-control", rows: 3, id: "message", name: "message", onChange: function (e) {
                    changeHandler(e);
                }, placeholder: "Nh\u1EAFn c\u00E1i g\u00EC cho b\u1EA3n th\u00E2n xem..." })),
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("p", { className: "text-center fs-1 fw-bold customtext" }, "Ch\u1ECDn ra t\u1EA5m \u1EA3nh n\u00E0o y\u00EAu th\u00EDch \u0111\u00EA"),
            react_1["default"].createElement("div", { className: " d-flex justify-content-center" },
                react_1["default"].createElement("input", { id: "image", name: 'image', type: "file", accept: "image/*", onChange: function (e) {
                        onImageChange(e);
                        changeHandler(e);
                    } })),
            react_1["default"].createElement("div", { className: "mb-3 customgrid " }, imageURLS.map(function (imageSrc) { return (react_1["default"].createElement("img", { className: "customimage my-3", src: imageSrc, alt: "not found", width: "250px", height: "250px" })); }))),
        react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
            react_1["default"].createElement("button", { className: "btn  btn-primary custombutton", type: "submit", onClick: function (e) {
                    e.preventDefault();
                    showState();
                } }, "G\u1EEDi SMS"))));
};
exports["default"] = Card;
