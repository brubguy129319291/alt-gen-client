const http = require("./http.js")

const link = "https://auth.roblox.com/v2/logout/"

module.exports = async function(cookie){
    const formatted = `.ROBLOSECURITY=${cookie}`

    const result = await http(link, {
        method: "POST",

        headers: {
            Cookie: formatted,
        },
    })

    if (!result.response) return

    return result.response.headers["x-csrf-token"]
}