const jsonServer = require('json-server')
const UPServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

UPServer.use(middleware)
UPServer.use(router)

UPServer.listen(PORT, () => {
    console.log(`User Portal Server started at port ${PORT}`);
})