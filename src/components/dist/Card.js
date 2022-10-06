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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var Card = function () {
    var _a = react_2.useState([]), images = _a[0], setImages = _a[1];
    var _b = react_2.useState([]), imageURLS = _b[0], setImageURLs = _b[1];
    var _c = react_2.useState(moment_1["default"](Date.now()).format("YYYY-MM-DD")), defaultDate = _c[0], setdefaultDate = _c[1];
    var _d = react_2.useState(false), btnDisable = _d[0], setbtnDisalbe = _d[1];
    var navigate = react_router_dom_1.useNavigate();
    var _e = react_2.useState({
        name: "",
        mail: "",
        phone: "",
        date: defaultDate,
        message: "",
        image: "",
        id: uuid_1.v4()
    }), form = _e[0], setForm = _e[1];
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
    var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
    function onSubmit() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(form);
                        if (!(form.name == "" ||
                            form.date == "" ||
                            form.mail == "" ||
                            form.message == "" ||
                            form.phone == "")) return [3 /*break*/, 1];
                        react_toastify_1.toast.error("Create record fail, please full fill information", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        ProfileService_1["default"].create(form);
                        submitEmail();
                        react_toastify_1.toast.info("Create record success, check your email for record code", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                        });
                        setbtnDisalbe(!btnDisable);
                        return [4 /*yield*/, delay(2000)];
                    case 2:
                        _a.sent();
                        navigate("/");
                        setbtnDisalbe(!btnDisable);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function submitEmail() {
        var templateParams = {
            to_name: form.name,
            message: form.id,
            to_name: form.mail
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
        react_1["default"].createElement(react_toastify_1.ToastContainer, null),
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
            react_1["default"].createElement("button", { disabled: btnDisable, className: "btn font-text btn-lg  custombutton  ", type: "submit", onClick: function (e) {
                    onSubmit();
                } }, !btnDisable ? "Save Record" : "Loading..."))));
};
exports["default"] = Card;
