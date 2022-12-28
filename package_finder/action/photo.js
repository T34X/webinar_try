const { bot } = require("../core/bot");

bot.on('photo', ctx => {
    
    let photos = ctx.message.photo
    let user_id = ctx.message.chat.id
    
    ctx.replyWithHTML("<b>Qabul qilindi!</b>").then()
    ctx.telegram.sendPhoto(user_id, photos[photos.length - 1].file_id).then()
})