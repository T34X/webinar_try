const { bot } = require('../core/bot')

require('../core')

bot.start(ctx => {
    ctx.replyWithHTML(`<b>${ctx.from.first_name}</b>`).then()
})