const { Composer, Markup } = require('telegraf')
const { bot } = require('../core/bot')
const axios = require('axios')
const fuzzy = require('fuzzy')

const composer = new Composer()

const url = "https://raw.githubusercontent.com/denoland/registry/master/src/database.json"

composer.on('inline_query', async (ctx) => {
    let results = []
    let indexation = 0
    let database = await axios.get(url).then(
        res => res.data
    )

    let packs = Object.keys(database).map( (obj) => { return obj }) 
    let similarities = fuzzy.filter(ctx.inlineQuery.query, packs).sort().slice(0,20)
    let found = similarities.map( (it) => { return it.string } )
    for (let key of found){
        let data = database[key]
        let repo = data["repo"]
        let author = data["owner"]
        let deno = `https://deno.land/x/${key}`
        let github = `https://github.com/${author}/${repo}`
        let prefix = key.replace("_", " ")

        let text = 
            `<b>Package:</b> ${prefix}\n` +
            `<b>Author:</b> ${author}\n`
        
        const keyboard = Markup.inlineKeyboard([
            Markup.button.url("Github",`${github}`),
            Markup.button.url('Deno', `${deno}`),
        ], {
            columns: 2
        })

        let serializer = () => {
            const querylizer = {
                type: "article",
                id: ++indexation,
                url: deno,
                title: prefix,
                reply_markup: keyboard,
                message_text: text,
            }
            results.push(querylizer)
        }; serializer()
    }

    
    return await ctx.answerInlineQuery({results})

})

bot.use(composer.middleware())