const http = require('http')
const dataBase = require('./api')

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end( {message: 'Deu certo?'})
})

server.listen(3001, "My first Server", () => console.log('Meu primeiro servidor está rodando na porta 3001'))


