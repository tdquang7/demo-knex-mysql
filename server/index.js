let restify = require('restify')
let server = restify.createServer()

var knex = require("knex")({
    client: 'mysql2',
    connection: {
        host : 'db',
        user : 'root',
        password : '123',
        database : 'sgtimes'
    }
});

server.get('/', (req, res) => {
    knex.select().table('users').then(users => {
        res.send({
            data: users
        })
    })
})

server.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`)
})