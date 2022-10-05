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
require("../styles/Input.scss");
var react_2 = require("react");
var moment_1 = require("moment");
var ProfileService_1 = require("../service/ProfileService");
var browser_1 = require("@emailjs/browser");
var uuid_1 = require("uuid");
var Card = function () {
    var _a = react_2.useState([]), images = _a[0], setImages = _a[1];
    var _b = react_2.useState([]), imageURLS = _b[0], setImageURLs = _b[1];
    var _c = react_2.useState(moment_1["default"](Date.now()).format("YYYY-MM-DD")), defaultDate = _c[0], setdefaultDate = _c[1];
    var _d = react_2.useState({
        name: "",
        mail: "",
        phone: "",
        date: defaultDate,
        message: "",
        image: "",
        id: uuid_1.v4()
    }), form = _d[0], setForm = _d[1];
    react_2.useEffect(function () {
        if (images.length < 1)
            return;
        var newImageUrls = [];
        images.forEach(function (image) {
            return newImageUrls.push(URL.createObjectURL(image));
        });
        setImageURLs(newImageUrls);
        toDataUrl(newImageUrls, function (myBase64) {
            setForm(__assign(__assign({}, form), { image: myBase64 })); // myBase64 is the base64 string
        });
    }, [images]);
    function onImageChange(e) {
        setImages(__spreadArrays(e.target.files));
    }
    function submitEmail() {
        var templateParams = {
            to_name: form.name,
            message: form.id
        };
        browser_1["default"].init("4sXJxHrh5e3-NMGIn");
        browser_1["default"].send("service_t70vk55", "template_ujphn5r", templateParams).then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            console.log("FAILED...", error);
        });
    }
    var changeHandler = function (event) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[event.target
            .name] = event.target.value, _a)));
    };
    function toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    }
    return (react_1["default"].createElement("div", { className: " card bg-white px-5 py-5 mb-4 mx-4 pinktext" },
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold font-text", htmlFor: "name" }, "Your name"),
            react_1["default"].createElement("input", { type: "text", className: "form-control", id: "name", name: "name", placeholder: "Your Name", onChange: function (e) {
                    changeHandler(e);
                } })),
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold font-text", htmlFor: "date" }, "Date of message"),
            react_1["default"].createElement("input", { type: "date", className: "form-control", defaultValue: defaultDate, id: "date", name: "date", onChange: function (e) {
                    changeHandler(e);
                } })),
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold font-text", htmlFor: "mail" }, "Your Email"),
            react_1["default"].createElement("input", { type: "mail", className: "form-control", id: "mail", name: "mail", onChange: function (e) {
                    changeHandler(e);
                } })),
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold font-text", htmlFor: "phone" }, "Phone Number"),
            react_1["default"].createElement("input", { type: "phone", className: "form-control", id: "phone", name: "phone", onChange: function (e) {
                    changeHandler(e);
                } })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { className: "form-label fs-1 fw-bold font-text", htmlFor: "message" }, "Your Message"),
            react_1["default"].createElement("input", { className: "form-control", id: "message", name: "message", onChange: function (e) {
                    changeHandler(e);
                }, placeholder: "Message that you want to record" })),
        react_1["default"].createElement("div", { className: "mb-3" },
            react_1["default"].createElement("p", { className: "text-center fs-1 fw-bold customtext font-text" }, "Any picture (just in case)"),
            react_1["default"].createElement("div", { className: " d-flex justify-content-center" },
                react_1["default"].createElement("input", { id: "image", name: "image", type: "file", accept: "image/*", onChange: function (e) {
                        onImageChange(e);
                    } })),
            react_1["default"].createElement("div", { className: "mb-3 customgrid " }, imageURLS.map(function (imageSrc) { return (react_1["default"].createElement("img", { className: "customimage my-3", src: imageSrc, alt: "not found", width: "250px", height: "250px" })); }))),
        react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
            react_1["default"].createElement("button", { className: "btn font-text btn-lg  custombutton  ", type: "submit", onClick: function (e) {
                    ProfileService_1["default"].create(form);
                    submitEmail();
                } }, "Save Record"))));
};
exports["default"] = Card;
