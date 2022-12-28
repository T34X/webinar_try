const { Markup } = require("telegraf")

const keyboards = {
    "start" : Markup.inlineKeyboard([Markup.button.callback("Buyruqlarni ko'rsatish!","help")])
}

module.exports = {
    keyboards
}