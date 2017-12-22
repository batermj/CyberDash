const config = require('./config')
const TwitterBot = require('./bot')
const bot = new TwitterBot(config)

// subscirbe to user events
const userStream = bot.twitter.stream('user')
userStream.on('follow', event => bot.helloFriend(event)) // say hello :)

// check whitelist every hour
setInterval(() => bot.updateWhitelist, 60 * 60 * 1000)

// check blacklist every 15 minutes
setInterval(() => bot.updateBlacklist, 15 * 60 * 1000)

// check for mentions every 10 minutes
setInterval(() => bot.likeMentions, 10 * 60 * 1000)

// search tweets every 15 minutes
setInterval(() => bot.searchTweets, 15 * 60 * 1000)
console.log('Search started! Will run every 15 minutes. Standby!')

setInterval(() => {
  process.stdout.write('.')
}, 1000)
