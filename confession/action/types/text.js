const { Composer,Markup } = require("telegraf");
const { bot } = require("../../core/bot");
const { confession, admin } = require("../../../config")

const composer = new Composer()

composer.on('text', ctx => {
    ctx.telegram.sendMessage(admin,
        `Bizda yangi matnli xabar: \n\n` +
        ctx.message.text + 
        `\nUni confessionga yuborishni xohlaysizmi?`
    ,{
        ...Markup.inlineKeyboard([
            [Markup.button.callback('✅',`accept_${ctx.message.text}`),
            Markup.button.callback('❌',`decline_${ctx.message.text}`)]
        ])
    }).then()
})

composer.action(/accept_(.*)/gi, ctx => {
    let match = ctx.match[1]
    ctx.telegram.deleteMessage(ctx.from.id, ctx.update.callback_query.message.message_id)
    ctx.telegram.sendMessage(confession, match)
    ctx.telegram.sendMessage(ctx.from.id, "Xabaringiz muvofaqqiyatli yuborildi!")
})

composer.action(/decline_(.*)/gi, ctx => {
    ctx.telegram.deleteMessage(ctx.from.id, ctx.update.callback_query.message.message_id)
    ctx.telegram.sendMessage(ctx.from.id, "Afsuski, adminlar xabaringizni tasdiqlashmadi :(")
})


bot.use(composer.middleware())