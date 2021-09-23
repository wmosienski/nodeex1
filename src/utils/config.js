const config = {
    API_SECRET: process.env.API_SECRET || '2137', 
    REFRESH_SESSION_TIME: '10m',
    DB: {
        MYSQL: {
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || 'anorektyk',
            database: process.env.MYSQL_DATABASE || 'todoapp'
        },
        MONGO: {
            HOST: process.env.MONGO_HOST || 'mongodb://localhost:27017/test',
        }
    }
}

module.exports = { getConfig: () => config }