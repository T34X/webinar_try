const { Composer } = require('telegraf')
const { bot } = require('../core/bot')
const composer = new Composer()
const { messages } = require('../lib/messages')
const { keyboards } = require("../lib/keyboars")

composer.start(ctx => {

    const text = ``
    ctx.replyWithHTML(messages['start'], {
        ...keyboards['start']
    }).then()

})

composer.action("help", ctx => {
    ctx.editMessageText(messages["help"], {
        parse_mode: "html"
    }).then()
})

bot.use(composer.middleware())