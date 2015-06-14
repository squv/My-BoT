var Bot = require('../src/bot');

var bot = new Bot({
	key: '3e59d254-fed2-4a1d-9fc0-28703c282318',
	secret: 'e5c1a0953084a677c1bdce14a08d2473568ea8421b1a6a84',
	roomId: 'user:051c8221-059b-11e5-80de-42010af0e00d:web',
	debug: true
});

bot.on('connect', function() {});
bot.on('say', function(args) {
	if(args.message.toLowerCase().indexOf('profanity') !== -1) {
		bot.erase([args.messageId])
	}
});
