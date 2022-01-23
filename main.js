// Copyright (c) 2022 qianjunakasumi <i@qianjunakasumi.ren>
//                    qianjunakasumi <qianjunakasumi@outlook.com>
//                    [qianjunakasumi] 千橘雫霞(https://github.com/qianjunakasumi)
//
//      This Source Code Form is subject to the terms of the Mozilla Public
//      License, v. 2.0. If a copy of the MPL was not distributed with this
//      file, You can obtain one at http://mozilla.org/MPL/2.0/.

// ==UserScript==
// @name         他奶奶的高考直通车
// @namespace    ren.qianjunakasumi
// @version      1.0.0
// @author       qianjunakasumi
// @description  解除高考直通车展开阅读全部的下载 APP 和登录限制
// @source       https://github.com/qianjunakasumi/FuckGaoKaoZhiTongChe
// @updateURL    https://github.com/qianjunakasumi/FuckGaoKaoZhiTongChe/blob/main/main.js
// @supportURL   https://github.com/qianjunakasumi/FuckGaoKaoZhiTongChe/issues/new/choose
// @match        https://app.gaokaozhitongche.com/newsexam/h/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
    GM_addStyle(`
.hideexam {
    max-height: none;
    overflow: hidden;
}
#mktip {
    display: none;
}
`);
})();
