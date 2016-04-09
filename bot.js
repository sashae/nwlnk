// bring in setup
var config = require("./config.js");
var fs = require("fs");
var irc = require("irc");
var twitter = require("./modules/twitter");
var youtube = require("./modules/youtube");

var Console = require('console').Console;

// set up logging to file
const output = fs.createWriteStream('./debug.log');
const errorOutput = fs.createWriteStream('./error.log');
const logger = new Console(output, errorOutput);


var bot = new irc.Client("irc.subtle.org", "nwlnk", {
  userName: "nwlnk",
  realName: "nwlnk",
  port: 6697,
  secure: true,
  autoConnect: true,
  selfSigned: true,
  channels: ["#somewhere"],
  debug: true,
  showErrors: true
});

bot.addListener("registered", function() {
  console.log("Bot is now registered with the server "+config.server);
});

bot.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

// Error listener
bot.addListener("error", function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.join('#somewhere');

// write stdout/errors to logfile
bot.addListener('stdout', function(message) {
    console.log('debug: ', message);
});
bot.addListener('error', function(message) {
    console.log('error: ', message);
});
