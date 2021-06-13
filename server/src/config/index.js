module.exports = {
  port: 8888,
  dbConnexion: {
    user: 'admin',
    password: 'fullstack',
    host: 'localhost',
    port: 27017,
    db: 'eventsite'
  },
  mongoUrl() {
    const { user, password, host, port, db } = this.dbConnexion;
    return `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`;
  }
}