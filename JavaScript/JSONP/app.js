const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    let data = {
        status: true,
        msg: 'hello world',
    }
    const body = url.parse(req.url, true)
    const callback = body.query.callback
    data = JSON.stringify(data)
    res.end(`${callback}(${data})`)
})

server.listen('3000', (err) => {
    console.log('server is running')
})