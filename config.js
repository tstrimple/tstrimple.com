var path = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'SendGrid',
                auth: {
                    user: process.env.SEND_GRID_USER,
                    pass: process.env.SEND_GRID_PASS
                }
            }
        },

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: process.env.PORT
        }
    },

    production: {
        url: 'http://tstrimple.azurewebsites.net',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'SendGrid',
                auth: {
                    user: process.env.SEND_GRID_USER,
                    pass: process.env.SEND_GRID_PASS
                }
            }
        },

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: process.env.PORT
        }
    }
};

// Export config
module.exports = config;