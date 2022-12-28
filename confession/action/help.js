const { bot } = require("../core/bot");

bot.help(ctx => {
    let text = `<b>Bot buyruqlari:</b>\n` +
            `/start - <code>Botni ishga tushiruvchi buyruq.</code>\n` +
            `<a href="google.com">Google</a>` +

    ctx.replyWithHTML(text).then()
})