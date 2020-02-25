const UserController = require('./controllers/UserController');

module.exports = (server) => {
    server.post('/', UserController.store);
    server.get('/', UserController.index);
}