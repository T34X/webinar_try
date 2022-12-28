const axios = require("axios")
const { Composer, Markup } = require("telegraf")
const { bot } = require("../core/bot")

const url = "https://raw.githubusercontent.com/denoland/dotland/main/versions.json"
const composer = new Composer()

composer.command("std", async ctx => {
    let keyboards = []
    let data = await axios.get(url).then(res => {
        return res.data['std'].slice(0,10)
    })
    for (let version of data) {
        keyboards.push(
            [Markup.button.url(`${version}`,`https://deno.land/x/std@${version}`)]
        )
    }
    ctx.replyWithHTML("Choose version from the list: ", {
        ...Markup.inlineKeyboard(keyboards)
    })
})

bot.use(composer.middleware())
