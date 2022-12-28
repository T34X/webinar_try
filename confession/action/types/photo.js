const { Composer } = require("telegraf");
const { admin, confession } = require("../../../config");
const { bot } = require("../../core/bot");

const composer = new Composer()

composer.on('photo', ctx => {
    ctx.telegram.sendPhoto(admin, ctx.message.photo[ctx.message.photo.length - 1].file_id).then()
    ctx.telegram.sendPhoto(confession, ctx.message.photo[ctx.message.photo.length - 1].file_id).then()
})

bot.use(composer.middleware())