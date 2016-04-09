// bring in setup
var config = require('./config.json');
var fs = require('fs');
var irc = require('irc');
var console = require('console').Console;

// set up logging to file
const output = fs.createWriteStream('./debug.log');
const errorOutput = fs.createWriteStream('./error.log');
const logger = new console(output, errorOutput);


var bot = new irc.Client(config.server, config.nick, config);

//bot.connect(5, function() {
bot.join('#somewhere');
//});

// write stdout/errors to logfile
bot.addListener('stdout', function(message) {
    console.log('debug: ', message);
});
bot.addListener('error', function(message) {
    console.log('error: ', message);
});
