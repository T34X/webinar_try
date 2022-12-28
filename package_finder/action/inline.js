const { Markup } = require('telegraf')
const { bot } = require("../core/bot");

bot.command('test', ctx => {

    const url_keyboard = Markup.inlineKeyboard(
        [
            Markup.button.url("Google","https://google.com")
        ]
    )

    const inline_key = Markup.inlineKeyboard([
        Markup.button.callback("Change","inline")
    ])

    ctx.telegram.sendMessage(
        ctx.from.id,
        "test url button",
        {
        ...inline_key
        }
    ).then()
})

bot.action('inline', ctx => {
    ctx.editMessageText(
        "Changer"
    ).then()
})