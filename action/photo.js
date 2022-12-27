const { bot } = require("../core/bot");

bot.on('photo', ctx => {
    ctx.replyWithHTML("<b>Qabul qilindi!</b>").then()
    console.log(ctx.message.photo)
})