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
require("../styles/Gif.scss");
var js_fetch_api_1 = require("@giphy/js-fetch-api");
var Temp = function () {
    var _a = react_1.useState(false), imgsLoaded = _a[0], setImgsLoaded = _a[1];
    var _b = react_1.useState(), gif = _b[0], setGif = _b[1];
    react_1.useEffect(function () {
        var fetchGif = function () { return __awaiter(void 0, void 0, void 0, function () {
            var gf, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gf = new js_fetch_api_1.GiphyFetch("LuK13keeucvx3ZeicP3o1Ll8gWIp0NWI");
                        return [4 /*yield*/, gf.random({ limit: 1 })];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        setGif(data.data.images.original.url);
                        setImgsLoaded(true);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchGif();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("meta", { httpEquiv: "Content-Security-Policy", content: "upgrade-insecure-requests" }),
        gif != "" && imgsLoaded ? (react_1["default"].createElement("img", { src: gif, className: "customgif" })) : (react_1["default"].createElement("div", { className: "black-background " },
            react_1["default"].createElement("h1", { className: "centered" }, "Loading...")))));
};
exports["default"] = Temp;
