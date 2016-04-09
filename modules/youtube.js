var goog = require('googleapis');
var OAuth2 = goog.auth.OAuth2;
var yt = goog.youtube({version: 'v3'})
var moment = require('moment');

var ytconfig = require("./youtube.json");
var apiKey = ytconfig.apikey;

var ytRegex =  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
