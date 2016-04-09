// bring in setup
var config = require('./config');

// set up logging to file
const fs = require('fs');
const output = fs.createWriteStream('./debug.log');
const errorOutput = fs.createWriteStream('./error.log');
const Console = console.Console;
const logger = new Console(output, errorOutput);

var irc = require('irc');

var bot = new irc.Client(config.server, config.nick, { 
	port: config.port, 
	secure: config.secure, 
	selfSigned: config.selfSigned, 
	userName: config.userName, 
	realName: config.realName, 
	channels: config.channels, 
	debug: config.debug, 
	showErrors: config.showErrors
});

// write stdout/errors to logfile
bot.addListener('stdout', function(message) {
    logger.log('debug: ', message);
});
bot.addListener('error', function(message) {
    logger.log('error: ', message);
});
