const restify = require('restify');
const router = require('./routes');
class App {
    constructor() {
        this.server = restify.createServer();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(restify.plugins.bodyParser({
            mapParams: false
        }));
    }

    routes() {
        router(this.server);
    }

    init(port, callback) {
        this.server.listen(port, callback);
    }
}

module.exports = new App();