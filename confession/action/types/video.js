const { Composer } = require("telegraf");
const { admin, confession } = require("../../../config");
const { bot } = require("../../core/bot");

const composer = new Composer()

composer.on('video', ctx => {
    ctx.telegram.sendVideo(admin, ctx.message.video.file_id).then()
    ctx.telegram.sendVideo(confession, ctx.message.video.file_id).then()
})

bot.use(composer.middleware())