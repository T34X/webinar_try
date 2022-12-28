const { bot } = require('../../core/bot')
const { Composer }= require('telegraf')

const composer = new Composer()

composer.start(ctx => {
    ctx.replyWithHTML(
        `Hurmatli ${ctx.from.first_name}, confession Managerga xush kelibsiz!`
    ).then()
})

bot.use(composer.middleware())