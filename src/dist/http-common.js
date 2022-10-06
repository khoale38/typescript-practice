"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
exports["default"] = axios_1["default"].create({
    baseURL: "https://be-messagerecord.herokuapp.com/",
    headers: {
        'Content-Type': "multipart/form-data"
    }
});
