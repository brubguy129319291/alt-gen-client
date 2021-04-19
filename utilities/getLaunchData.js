const http = require("./http.js")
const getCsrf = require("./getCsrfToken.js")

const auth = "https://auth.roblox.com/v1/authentication-ticket"

async function getAuthTicket(cookie){
    const formatted = `.ROBLOSECURITY=${cookie}`
    const csrf = await getCsrf(cookie)

    if (!csrf) return

    const result = await http(auth, {
        method: "POST",
        headers: {
            "Cookie": formatted,
            "referer": "https://www.roblox.com/",
            "x-csrf-token": csrf,
        },
    })

    const ticket = result.headers["rbx-authentication-ticket"]
    if (!ticket) return

    return ticket
}

module.exports = async function(cookie, placeId){
    const time = Math.floor(+new Date())

    const auth = await getAuthTicket(cookie)
    if (!auth) return [false, "No Auth Ticket"]

    let url = ["roblox-player:1"]
    
    function push(key, value) {
        url.push(`${key}:${value}`)
    }

    const urlParams = `?request=RequestGame&browserTrackerId=1147338376&placeId=${placeId}&isPlayTogetherGame=true`
    const launchUrl = encodeURIComponent("https://assetgame.roblox.com/game/PlaceLauncher.ashx"+urlParams)
    
    push("launchmode","play")
    push("gameinfo",auth)
    push("launchtime",time)
    push("placelauncherurl", launchUrl)

    push("browsertrackerid","1480614826")

    push("robloxLocale","en_us")
    push("gameLocale","en_us")

    push("channel","")

    return [true,url.join("+")]
}