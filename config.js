var path = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost:3000',
        mail: {
            transport: 'SMTP',
            host: 'smtp.sendgrid.net',
            options: {
                service: 'SendGrid',
                auth: {
                    user: process.env.SENDGRID_USER,
                    pass: process.env.SENDGRID_PASS
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
            port: process.env.PORT || 3000
        }
    },

    production: {
        url: 'http://tstrimple.com',
        mail: {
            transport: 'SMTP',
            host: 'smtp.sendgrid.net',
            options: {
                service: 'SendGrid',
                auth: {
                    user: process.env.SENDGRID_USER,
                    pass: process.env.SENDGRID_PASS
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
            port: process.env.PORT || 3000
        }
    }
};

// Export config
module.exports = config;