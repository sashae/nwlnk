// bring in setup
var config = require('./config');

// set up logging to file
const output = fs.createWriteStream('./debug.log');
const errorOutput = fs.createWriteStream('./error.log');
const logger = new Console(output, errorOutput);

var irc = require('irc');

var bot = new irc.Client(config.server, config.nick, 
	{ config.port, 
	config.secure, 
	config.selfSigned, 
	config.userName, 
	config.realName, 
	channels: config.channels, 
	config.debug, 
	config.showErrors
});

// write stdout/errors to logfile
bot.addListener('stdout', function(message) {
    logger.log('debug: ', message);
});
bot.addListener('error', function(message) {
    logger.log('error: ', message);
});
