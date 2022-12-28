const { Composer } = require("telegraf");
const { bot } = require("../../core/bot");

const composer = new Composer()

composer.help(ctx => {
    ctx.replyWithHTML(
        `Ishlatish mumkin bo'lgan buyruqlar ro'yxati: \n` +
        `/start - <code>Botni ishga tushurish!</code>\n` +
        `/help - <code>Shu xabarni ko'rsatish!</code>\n` +
        `\n` +
        `<i>Menga hoxlagan video, sms, rasm yuboring va men uni kanalga yuboraman!</i>`
    )
})

bot.use(composer.middleware())