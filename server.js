const http = require('http')
const dataBase = require('./api')

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    res.writeHead(200)
    res.end(JSON.stringify(dataBase))
})

server.listen(3001, () => console.log('Meu primeiro servidor está rodando na porta 3001'))

