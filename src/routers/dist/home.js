"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../styles/Home.scss");
var react_2 = require("react");
var ProfileService_1 = require("../service/ProfileService");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var Main = function () {
    var inputRef = react_2.useRef(null);
    var navigate = react_router_dom_1.useNavigate();
    var form;
    function axiosTest() {
        return __awaiter(this, void 0, void 0, function () {
            var promise, dataPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = ProfileService_1["default"].find(inputRef.current.value);
                        return [4 /*yield*/, promise.then(function (response) { return response; })];
                    case 1:
                        dataPromise = _a.sent();
                        form = dataPromise;
                        return [2 /*return*/];
                }
            });
        });
    }
    function onClickHandle(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axiosTest()];
                    case 1:
                        _a.sent();
                        console.log(form);
                        if (inputRef.current.value == "") {
                            react_toastify_1.toast.error("Please full fill your Record code", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined
                            });
                            return [2 /*return*/];
                        }
                        else if (form === undefined) {
                            react_toastify_1.toast.error("Record code is invalid", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined
                            });
                            return [2 /*return*/];
                        }
                        else {
                            navigate("/record", {
                                state: {
                                    date: form.date,
                                    message: form.message,
                                    name: form.name,
                                    image: form.image
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement("div", { className: "Home-bg d-flex" },
        react_1["default"].createElement(react_toastify_1.ToastContainer, null),
        react_1["default"].createElement("div", { className: "card custom-card mx-auto" },
            react_1["default"].createElement("div", { className: "mb-3 " },
                react_1["default"].createElement("div", { className: "form-label  text-align" }, "Input Record Code"),
                react_1["default"].createElement("input", { ref: inputRef, type: "email", className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp" })),
            react_1["default"].createElement("button", { className: "btn btn-grad mb-3", type: "button", onClick: onClickHandle }, "Submit"),
            react_1["default"].createElement("button", { className: "btn btn-grad2 mb-3", type: "button", onClick: function () { return navigate("/input"); } }, "Go Create Record"),
            react_1["default"].createElement("a", { href: "/gif", className: "mx-auto text-color" },
                "I am feeling lucky today - Get a random Gif",
                " "))));
};
exports["default"] = Main;
