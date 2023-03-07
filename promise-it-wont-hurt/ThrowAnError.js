var pro;

function parsedPromised(toBeParsed) {
    try {
        var parsed = JSON.parse(toBeParsed)
        pro = Promise.resolve(parsed)
    } catch (err) {
        pro = Promise.reject(err.message)
    }
    return pro
}

parsedPromised(process.argv[2]).then(console.log).then(null, console.log)
