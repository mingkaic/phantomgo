/*
 * POST method
 * system.args[0] == JSfile.js
 * system.args[1] == url
 * system.args[2] == cookie
 * system.args[3] == pageEncode
 * system.args[4] == userAgent
 * system.args[5] == postdata
 */

var system = require('system');
var page = require('webpage').create();
var url = system.args[1];
var cookie = system.args[2];
var pageEncode = system.args[3];
var userAgent = system.args[4];
var postdata = system.args[5];
page.onResourceRequested = function(requestData, request) {
    if (request) {
        request.setHeader('Cookie', cookie)
    }
};
phantom.outputEncoding=pageEncode;
page.settings.userAgent = userAgent;
page.open(url, 'post', postdata, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});
