var app = {
  dbUrl: 'mongodb://liuyi:54054331@101.200.56.100:27017/consoleData',
  // dbUrl: 'mongodb://127.0.0.1:27017',
  dbName: 'consoleData',
  opts: {
    auth: {
      authMechanism: 'MONGODB-CR', // 如果使用 SCRAM-SHA-1 认证则不需要此参数
      authSource: 'readWrite'
    }
  }
}

module.exports = app
