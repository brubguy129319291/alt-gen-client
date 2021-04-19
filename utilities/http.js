const axios = require("axios")

const def = {
    method: "POST",
}

module.exports = function(link, data = def){
    return new Promise((res, err) => {
        axios(link, data).then(result => {
            res(result)
        }).catch(result2 => {
            res(result2)
        })
    })
}